#!/usr/bin/env node
/*
 * Checks each IronPAX scorecard's scoring model against the anchor the
 * challenge post itself publishes -- the stated per-round or per-trip total.
 * That anchor is the whole point: a calculator that misreads the workout
 * fails silently and someone submits a wrong number to the bracket.
 *
 * Run from the repo root:  node _tools/verify-ironpax.js
 * Exits non-zero if any week fails.
 */
"use strict";
const fs = require("fs"), path = require("path");
const ROOT = path.join(__dirname, "..");

let failures = 0, checks = 0;
const ok = (cond, msg) => { checks++; if (!cond) { console.log("    FAIL: " + msg); failures++; } };

function scoringBlock(file, from, to) {
  const src = fs.readFileSync(path.join(ROOT, file), "utf8");
  const a = src.indexOf(from), b = src.indexOf(to, a);
  if (a < 0 || b < 0) throw new Error(`${file}: scoring block not found (${from} .. ${to})`);
  return src.slice(a, b);
}

/* ---------------- Week 2 - RAISE THE FLAG ---------------------------------
 * Yards + reps, reps escalate N*12. Anchors: all 40 cumulative checkpoint
 * cells from week2.xlsm, the published 250+48N / 24N^2+274N formulas, and
 * the Ojos worked example of 1582.
 * ------------------------------------------------------------------------ */
function week2() {
  console.log("  Week 2 - RAISE THE FLAG (yards + reps, escalating)");
  const ctx = {};
  (new Function(scoringBlock("ironpax-week-2.html", "var ROUNDS = 8;", "// state.done") +
    ";Object.assign(this,{ROUNDS,PER,STAGES,stageVal,globalVal,bankedThrough});")).call(ctx);
  const { ROUNDS, PER, bankedThrough, globalVal } = ctx;

  const SHEET = {
    1:[100,112,212,224,249,261,286,298], 2:[398,422,522,546,571,595,620,644],
    3:[744,780,880,916,941,977,1002,1038], 4:[1138,1186,1286,1334,1359,1407,1432,1480],
    5:[1580,1640,1740,1800,1825,1885,1910,1970],
  };
  for (const n of Object.keys(SHEET))
    for (let i = 0; i < 8; i++) {
      const got = bankedThrough((n - 1) * PER + i + 1);
      ok(got === SHEET[n][i], `R${n} stage ${i+1}: got ${got}, spreadsheet says ${SHEET[n][i]}`);
    }
  console.log("    40 spreadsheet checkpoint cells");

  for (let n = 1; n <= ROUNDS; n++) {
    ok(bankedThrough(n*PER) === 24*n*n + 274*n, `accumulated after R${n}`);
    ok(bankedThrough(n*PER) - bankedThrough((n-1)*PER) === 250 + 48*n, `R${n} worth 250+48N`);
  }
  console.log("    250+48N per round, 24N^2+274N accumulated, R1-R8");

  ok(bankedThrough(4*PER + 1) + 2 === 1582, "Ojos worked example should be 1582");
  console.log("    Ojos worked example = 1582");

  for (let g = 0; g < ROUNDS*PER; g++)
    ok(bankedThrough(g) + globalVal(g) === bankedThrough(g+1), `continuity at stage ${g}`);
  ok(bankedThrough(0) === 0, "empty scorecard scores 0");
  console.log(`    continuity across all ${ROUNDS*PER} stages`);
}

/* ---------------- Week 3 - "Belle"Ringer ---------------------------------
 * Reps only, flat. Anchor: "Each complete trip is 125 reps".
 * ------------------------------------------------------------------------ */
function week3() {
  console.log('  Week 3 - "Belle"Ringer (reps only, flat 125)');
  const ctx = {};
  (new Function(scoringBlock("ironpax-week-3.html", "var TRIP = 125;", "var state = {trips:0") +
    ";Object.assign(this,{TRIP,STAGES,N,cum});")).call(ctx);
  const { TRIP, STAGES, N, cum } = ctx;

  ok(N === 10, `10 stages, got ${N}`);
  ok(cum(N) === TRIP && TRIP === 125, `trip total ${cum(N)}, post says 125`);
  console.log("    trip total = 125");

  const mmk = STAGES.filter(s => s.cone === 1);
  ok(mmk.length === 5 && mmk.every(s => s.reps === 5), "5 manmaker sets of 5 at the center");
  ok(STAGES.filter(s => s.cone !== 1).reduce((t,s) => t + s.reps, 0) === 100, "cone reps total 100");
  console.log("    25 manmaker reps + 100 cone reps");

  const want = [[2,10],[3,15],[4,20],[5,25],[6,30]];
  const got = STAGES.filter(s => s.cone !== 1).map(s => [s.cone, s.reps]);
  ok(JSON.stringify(got) === JSON.stringify(want), "cone order/reps " + JSON.stringify(got));
  for (let i = 0; i < N; i++)
    ok(STAGES[i].cone === (i % 2 === 0 ? 1 : STAGES[i].cone), `stage ${i+1} center/cone alternation`);
  console.log("    cones 2-6 at 10/15/20/25/30, alternating with the center");

  ok(JSON.stringify([...Array(N+1).keys()].map(cum)) ===
     JSON.stringify([0,5,15,20,35,40,60,65,90,95,125]), "cumulative ladder");
  ok(3*TRIP + cum(3) + 7 === 402, "scenario: 3 trips + 3 stages + 7 goblet squats = 402");
  ok(cum(N) === TRIP, "a full trip equals one trip-counter click");
  console.log("    cumulative ladder + continuity");
}

/* ---------------- Week 4 - Crayola's Masterpiece -------------------------
 * Reps only, flat, every set 10. Anchors: "Every exercise is 10 reps" and
 * "Each complete trip is 150 reps".
 * ------------------------------------------------------------------------ */
function week4() {
  console.log("  Week 4 - Crayola's Masterpiece (reps only, flat 150)");
  const ctx = {};
  (new Function(scoringBlock("ironpax-week-4.html", "var TRIP = 150;", "var state = {trips:0") +
    ";Object.assign(this,{TRIP,REPS,LEGS,STAGES,N,cum});")).call(ctx);
  const { TRIP, REPS, STAGES, N, cum } = ctx;

  ok(N === 15, `15 sets, got ${N}`);
  ok(cum(N) === TRIP && TRIP === 150, `trip total ${cum(N)}, post says 150`);
  ok(REPS === 10 && STAGES.every(s => s.reps === 10), 'every exercise is 10 reps');
  console.log("    15 sets x 10 reps = 150");

  const hubs = STAGES.filter(s => s.hub);
  ok(hubs.length === 5 && hubs.every(s => s.yd === 50 && s.name === "THRUSTERS"), "5 thruster sets at the 50");
  ok(STAGES.filter(s => !s.hub).length === 10, "10 station sets");
  console.log("    50 thruster reps + 100 station reps");

  for (let i = 0; i < N; i += 3) {
    ok(STAGES[i].hub === true, `set ${i+1} should be thrusters`);
    ok(!STAGES[i+1].hub && !STAGES[i+2].hub, `sets ${i+2}/${i+3} should be stations`);
    ok(STAGES[i+1].name === STAGES[i+2].name, `sets ${i+2}/${i+3} same exercise`);
    ok(STAGES[i+1].yd + STAGES[i+2].yd === 100, `sets ${i+2}/${i+3} mirror about the 50`);
  }
  console.log("    thruster/near/opposite pattern, mirrored about the 50");

  const depths = [], names = [];
  for (let i = 1; i < N; i += 3) { depths.push(STAGES[i].yd); names.push(STAGES[i].name); }
  ok(JSON.stringify(depths) === JSON.stringify([40,30,20,10,0]), "depths " + JSON.stringify(depths));
  ok(JSON.stringify(names) === JSON.stringify(
     ["PULLOVERS TO KNEES","MANMAKERS","CURL-PRESS-OH SQUAT","BDE SIT-UPS","KRAKEN BURPEES"]),
     "exercise order " + JSON.stringify(names));
  console.log("    depths march 40 -> 30 -> 20 -> 10 -> goal");

  ok(JSON.stringify([...Array(N+1).keys()].map(cum)) ===
     JSON.stringify([0,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150]), "cumulative ladder");
  ok(2*TRIP + cum(4) + 6 === 346, "scenario: 2 trips + 4 sets + 6 reps = 346");
  console.log("    cumulative ladder + continuity");
}

console.log("IronPAX scorecard verification\n");
for (const wk of [week2, week3, week4]) {
  try { wk(); } catch (e) { console.log("    ERROR: " + e.message); failures++; }
  console.log("");
}
console.log(failures ? `FAILED - ${failures} of ${checks} checks` : `OK - all ${checks} checks pass`);
process.exit(failures ? 1 : 0);
