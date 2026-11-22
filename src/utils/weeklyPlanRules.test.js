import test from "node:test";
import assert from "node:assert/strict";
import { isPlanWithinLimit } from "./weeklyPlanRules.js";

// Test with a normal weekly plan (3 meals)
test("Plan with 3 meals should be valid", () => {
  const plan = {
    Monday: "meal1",
    Tuesday: "meal2",
    Wednesday: "meal3",
  };

  assert.equal(isPlanWithinLimit(plan), true);
});

// Test with exactly 7 meals
test("Plan with 7 meals should be valid", () => {
  const plan = {
    Monday: "meal1",
    Tuesday: "meal2",
    Wednesday: "meal3",
    Thursday: "meal4",
    Friday: "meal5",
    Saturday: "meal6",
    Sunday: "meal7",
  };

  assert.equal(isPlanWithinLimit(plan), true);
});

// Test with more than 7 meals
test("Plan with 8 meals should be invalid", () => {
  const plan = {
    Monday: "meal1",
    Tuesday: "meal2",
    Wednesday: "meal3",
    Thursday: "meal4",
    Friday: "meal5",
    Saturday: "meal6",
    Sunday: "meal7",
    Extra: "meal8",
  };

  assert.equal(isPlanWithinLimit(plan), false);
});