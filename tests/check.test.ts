import { assertEquals } from "https://deno.land/std@0.213.0/assert/mod.ts";
import { check } from '../luhn.ts'

Deno.test("validate succeeds", () => {
  const expected = check('4242424242424242')
  assertEquals(expected, true)
})

Deno.test("validate fails", () => {
  const expected = check('4142424242424242')
  assertEquals(expected, false)
})
