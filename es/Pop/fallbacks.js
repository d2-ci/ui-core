import * as positions from './positions';
/**
 * This determins the order in which to check whether the pop will fit
 * on the screen or not, if the provided position doesn't fit, this order
 * will be used starting at the next position.
 *
 * Structure of a position is:
 * [
 *   { vertical: string; horizontal: string }, // anchor
 *   { vertical: string; horizontal: string }, // pop
 *   [ ...Fallback positions ]
 * ]
 */

export const FALLBACKS = [
/**
 * All vertical && horizontal non-centered
 * =========================
 */
// Top/Top
[...positions.TOP_RIGHT_TOP_LEFT, [positions.TOP_LEFT_TOP_RIGHT, positions.BOTTOM_RIGHT_BOTTOM_LEFT, positions.BOTTOM_LEFT_BOTTOM_RIGHT]], [...positions.TOP_LEFT_TOP_RIGHT, [positions.TOP_RIGHT_TOP_LEFT, positions.BOTTOM_LEFT_BOTTOM_RIGHT, positions.BOTTOM_RIGHT_BOTTOM_LEFT]], [...positions.TOP_LEFT_TOP_LEFT, [positions.TOP_RIGHT_TOP_RIGHT, positions.BOTTOM_LEFT_BOTTOM_LEFT, positions.BOTTOM_RIGHT_BOTTOM_RIGHT]], [...positions.TOP_RIGHT_TOP_RIGHT, [positions.TOP_LEFT_TOP_LEFT, positions.BOTTOM_RIGHT_BOTTOM_RIGHT, positions.BOTTOM_LEFT_BOTTOM_LEFT]], // Top/Bottom
[...positions.TOP_RIGHT_BOTTOM_LEFT, [positions.TOP_LEFT_BOTTOM_RIGHT, positions.BOTTOM_RIGHT_TOP_LEFT, positions.BOTTOM_LEFT_TOP_RIGHT]], [...positions.TOP_LEFT_BOTTOM_RIGHT, [positions.TOP_RIGHT_BOTTOM_LEFT, positions.BOTTOM_LEFT_TOP_RIGHT, positions.BOTTOM_RIGHT_TOP_LEFT]], [...positions.TOP_LEFT_BOTTOM_LEFT, [positions.TOP_RIGHT_BOTTOM_RIGHT, positions.BOTTOM_LEFT_TOP_LEFT, positions.BOTTOM_RIGHT_TOP_RIGHT]], [...positions.TOP_RIGHT_BOTTOM_RIGHT, [positions.TOP_LEFT_BOTTOM_LEFT, positions.BOTTOM_RIGHT_TOP_RIGHT, positions.BOTTOM_LEFT_TOP_LEFT]], // Bottom/Top
[...positions.BOTTOM_RIGHT_TOP_LEFT, [positions.BOTTOM_LEFT_TOP_RIGHT, positions.TOP_RIGHT_BOTTOM_LEFT, positions.TOP_LEFT_BOTTOM_RIGHT]], [...positions.BOTTOM_LEFT_TOP_RIGHT, [positions.BOTTOM_RIGHT_TOP_LEFT, positions.TOP_LEFT_BOTTOM_RIGHT, positions.TOP_RIGHT_BOTTOM_LEFT]], [...positions.BOTTOM_LEFT_TOP_LEFT, [positions.BOTTOM_RIGHT_TOP_RIGHT, positions.TOP_LEFT_BOTTOM_LEFT, positions.TOP_RIGHT_BOTTOM_RIGHT]], [...positions.BOTTOM_RIGHT_TOP_RIGHT, [positions.BOTTOM_LEFT_TOP_LEFT, positions.TOP_RIGHT_BOTTOM_RIGHT, positions.TOP_LEFT_BOTTOM_LEFT]],
/**
 * Bottom/Bottom
 * =============
 */
[...positions.BOTTOM_RIGHT_BOTTOM_LEFT, [positions.BOTTOM_LEFT_BOTTOM_RIGHT, positions.TOP_RIGHT_TOP_LEFT, positions.TOP_LEFT_TOP_RIGHT]], [...positions.BOTTOM_LEFT_BOTTOM_RIGHT, [positions.BOTTOM_RIGHT_BOTTOM_LEFT, positions.TOP_LEFT_TOP_RIGHT, positions.TOP_RIGHT_TOP_LEFT]], [...positions.BOTTOM_LEFT_BOTTOM_LEFT, [positions.BOTTOM_RIGHT_BOTTOM_RIGHT, positions.TOP_LEFT_TOP_LEFT, positions.TOP_RIGHT_TOP_RIGHT]], [...positions.BOTTOM_RIGHT_BOTTOM_RIGHT, [positions.BOTTOM_LEFT_BOTTOM_LEFT, positions.TOP_RIGHT_TOP_RIGHT, positions.TOP_LEFT_TOP_LEFT]],
/**
 * all horizontal centered
 * =====================
 */
// Top/Top
[...positions.TOP_LEFT_TOP_CENTER, [positions.TOP_RIGHT_TOP_CENTER, positions.TOP_LEFT_BOTTOM_CENTER, positions.TOP_RIGHT_BOTTOM_CENTER]], [...positions.TOP_LEFT_TOP_RIGHT, [positions.TOP_RIGHT_TOP_LEFT, positions.BOTTOM_LEFT_BOTTOM_RIGHT, positions.BOTTOM_RIGHT_BOTTOM_LEFT]], [...positions.TOP_LEFT_TOP_LEFT, [positions.TOP_RIGHT_TOP_RIGHT, positions.BOTTOM_LEFT_BOTTOM_LEFT, positions.BOTTOM_RIGHT_BOTTOM_RIGHT]], [...positions.TOP_RIGHT_TOP_CENTER, [positions.TOP_LEFT_TOP_CENTER, positions.TOP_RIGHT_BOTTOM_CENTER, positions.TOP_LEFT_BOTTOM_CENTER]], [...positions.TOP_RIGHT_TOP_RIGHT, [positions.TOP_LEFT_TOP_LEFT, positions.BOTTOM_LEFT_BOTTOM_LEFT, positions.BOTTOM_RIGHT_BOTTOM_RIGHT]], [...positions.TOP_RIGHT_TOP_LEFT, [positions.TOP_LEFT_TOP_RIGHT, positions.BOTTOM_RIGHT_BOTTOM_LEFT, positions.BOTTOM_LEFT_BOTTOM_RIGHT]], [...positions.TOP_CENTER_TOP_CENTER, [positions.BOTTOM_CENTER_BOTTOM_CENTER, positions.TOP_CENTER_BOTTOM_CENTER, positions.BOTTOM_CENTER_TOP_CENTER]], [...positions.TOP_CENTER_TOP_RIGHT, [positions.TOP_CENTER_TOP_LEFT, positions.BOTTOM_CENTER_BOTTOM_RIGHT, positions.BOTTOM_CENTER_BOTTOM_LEFT]], [...positions.TOP_CENTER_TOP_LEFT, [positions.TOP_CENTER_TOP_RIGHT, positions.BOTTOM_CENTER_BOTTOM_RIGHT, positions.BOTTOM_CENTER_BOTTOM_LEFT]], // Top/Bottom
[...positions.TOP_LEFT_BOTTOM_CENTER, [positions.TOP_RIGHT_BOTTOM_CENTER, positions.TOP_LEFT_TOP_CENTER, positions.TOP_RIGHT_TOP_CENTER]], [...positions.TOP_LEFT_BOTTOM_RIGHT, [positions.TOP_RIGHT_BOTTOM_LEFT, positions.BOTTOM_LEFT_BOTTOM_RIGHT, positions.BOTTOM_RIGHT_BOTTOM_LEFT]], [...positions.TOP_LEFT_BOTTOM_LEFT, [positions.TOP_RIGHT_BOTTOM_RIGHT, positions.BOTTOM_LEFT_TOP_LEFT, positions.BOTTOM_RIGHT_TOP_RIGHT]], [...positions.TOP_RIGHT_BOTTOM_CENTER, [positions.TOP_LEFT_BOTTOM_CENTER, positions.TOP_RIGHT_TOP_CENTER, positions.TOP_LEFT_TOP_CENTER]], [...positions.TOP_RIGHT_BOTTOM_RIGHT, [positions.TOP_LEFT_BOTTOM_LEFT, positions.BOTTOM_RIGHT_TOP_RIGHT, positions.BOTTOM_LEFT_TOP_LEFT]], [...positions.TOP_RIGHT_BOTTOM_LEFT, [positions.TOP_LEFT_BOTTOM_RIGHT, positions.BOTTOM_RIGHT_TOP_LEFT, positions.BOTTOM_LEFT_TOP_RIGHT]], [...positions.TOP_CENTER_BOTTOM_CENTER, [positions.TOP_CENTER_TOP_CENTER, positions.BOTTOM_CENTER_TOP_CENTER, positions.BOTTOM_CENTER_BOTTOM_CENTER]], [...positions.TOP_CENTER_BOTTOM_RIGHT, [positions.TOP_CENTER_BOTTOM_LEFT, positions.BOTTOM_CENTER_TOP_LEFT, positions.BOTTOM_CENTER_TOP_RIGHT]], [...positions.TOP_CENTER_BOTTOM_LEFT, [positions.TOP_CENTER_BOTTOM_RIGHT, positions.BOTTOM_CENTER_TOP_RIGHT, positions.BOTTOM_CENTER_TOP_LEFT]], // Bottom/Bottom
[...positions.BOTTOM_LEFT_BOTTOM_CENTER, [positions.BOTTOM_RIGHT_BOTTOM_CENTER, positions.TOP_LEFT_TOP_CENTER, positions.TOP_RIGHT_TOP_CENTER]], [...positions.BOTTOM_LEFT_BOTTOM_RIGHT, [positions.BOTTOM_RIGHT_BOTTOM_LEFT, positions.TOP_RIGHT_TOP_LEFT, positions.TOP_LEFT_TOP_RIGHT]], [...positions.BOTTOM_LEFT_BOTTOM_LEFT, [positions.BOTTOM_RIGHT_BOTTOM_RIGHT, positions.TOP_LEFT_TOP_LEFT, positions.TOP_RIGHT_TOP_RIGHT]], [...positions.BOTTOM_RIGHT_BOTTOM_CENTER, [positions.BOTTOM_LEFT_BOTTOM_CENTER, positions.TOP_RIGHT_TOP_CENTER, positions.TOP_LEFT_TOP_CENTER]], [...positions.BOTTOM_RIGHT_BOTTOM_RIGHT, [positions.BOTTOM_LEFT_BOTTOM_LEFT, positions.TOP_RIGHT_TOP_RIGHT, positions.TOP_LEFT_TOP_LEFT]], [...positions.BOTTOM_RIGHT_BOTTOM_LEFT, [positions.BOTTOM_LEFT_BOTTOM_RIGHT, positions.TOP_RIGHT_TOP_LEFT, positions.TOP_LEFT_TOP_RIGHT]], [...positions.BOTTOM_CENTER_BOTTOM_CENTER, [positions.TOP_CENTER_TOP_CENTER, positions.BOTTOM_CENTER_TOP_CENTER, positions.TOP_CENTER_BOTTOM_CENTER]], [...positions.BOTTOM_CENTER_BOTTOM_RIGHT, [positions.BOTTOM_CENTER_BOTTOM_LEFT, positions.TOP_CENTER_TOP_RIGHT, positions.TOP_CENTER_TOP_LEFT]], [...positions.BOTTOM_CENTER_BOTTOM_LEFT, [positions.BOTTOM_CENTER_BOTTOM_RIGHT, positions.TOP_CENTER_TOP_LEFT, positions.TOP_CENTER_TOP_RIGHT]], // Bottom/Top
[...positions.BOTTOM_CENTER_TOP_CENTER, [positions.TOP_CENTER_BOTTOM_CENTER, positions.BOTTOM_CENTER_BOTTOM_CENTER, positions.TOP_CENTER_TOP_CENTER]], [...positions.BOTTOM_CENTER_TOP_RIGHT, [positions.BOTTOM_CENTER_TOP_LEFT, positions.TOP_CENTER_BOTTOM_RIGHT, positions.TOP_CENTER_BOTTOM_LEFT]], [...positions.BOTTOM_CENTER_TOP_LEFT, [positions.BOTTOM_CENTER_TOP_RIGHT, positions.TOP_CENTER_BOTTOM_LEFT, positions.TOP_CENTER_BOTTOM_RIGHT]], [...positions.BOTTOM_LEFT_TOP_CENTER, [positions.BOTTOM_RIGHT_TOP_CENTER, positions.TOP_LEFT_BOTTOM_CENTER, positions.TOP_RIGHT_BOTTOM_CENTER]], [...positions.BOTTOM_LEFT_TOP_RIGHT, [positions.BOTTOM_RIGHT_TOP_LEFT, positions.TOP_LEFT_BOTTOM_RIGHT, positions.TOP_RIGHT_BOTTOM_LEFT]], [...positions.BOTTOM_LEFT_TOP_LEFT, [positions.BOTTOM_RIGHT_TOP_RIGHT, positions.TOP_LEFT_BOTTOM_LEFT, positions.TOP_RIGHT_BOTTOM_RIGHT]], [...positions.BOTTOM_RIGHT_TOP_CENTER, [positions.BOTTOM_LEFT_TOP_CENTER, positions.TOP_RIGHT_BOTTOM_CENTER, positions.TOP_LEFT_BOTTOM_CENTER]], [...positions.BOTTOM_CENTER_TOP_RIGHT, [positions.BOTTOM_CENTER_TOP_LEFT, positions.TOP_CENTER_BOTTOM_RIGHT, positions.TOP_CENTER_BOTTOM_LEFT]], [...positions.BOTTOM_CENTER_TOP_LEFT, [positions.BOTTOM_CENTER_TOP_RIGHT, positions.TOP_CENTER_TOP_LEFT, positions.TOP_CENTER_TOP_RIGHT]],
/**
 * all vertical centered
 * =====================
 */
// Top/Center
[...positions.TOP_LEFT_CENTER_RIGHT, [positions.TOP_RIGHT_CENTER_LEFT, positions.BOTTOM_LEFT_CENTER_RIGHT, positions.BOTTOM_RIGHT_CENTER_LEFT]], [...positions.TOP_LEFT_CENTER_LEFT, [positions.TOP_RIGHT_CENTER_RIGHT, positions.BOTTOM_LEFT_CENTER_LEFT, positions.BOTTOM_RIGHT_CENTER_RIGHT]], [...positions.TOP_LEFT_CENTER_CENTER, [positions.TOP_RIGHT_CENTER_CENTER, positions.BOTTOM_LEFT_CENTER_CENTER, positions.BOTTOM_RIGHT_CENTER_CENTER]], [...positions.TOP_RIGHT_CENTER_RIGHT, [positions.TOP_LEFT_CENTER_LEFT, positions.BOTTOM_RIGHT_CENTER_RIGHT, positions.BOTTOM_LEFT_CENTER_LEFT]], [...positions.TOP_RIGHT_CENTER_LEFT, [positions.TOP_LEFT_CENTER_RIGHT, positions.BOTTOM_RIGHT_CENTER_LEFT, positions.BOTTOM_LEFT_CENTER_RIGHT]], [...positions.TOP_RIGHT_CENTER_CENTER, [positions.TOP_LEFT_CENTER_CENTER, positions.BOTTOM_RIGHT_CENTER_CENTER, positions.BOTTOM_LEFT_CENTER_CENTER]], [...positions.TOP_CENTER_CENTER_LEFT, [positions.TOP_CENTER_CENTER_RIGHT, positions.BOTTOM_CENTER_CENTER_LEFT, positions.BOTTOM_CENTER_CENTER_RIGHT]], [...positions.TOP_CENTER_CENTER_RIGHT, [positions.TOP_CENTER_CENTER_LEFT, positions.BOTTOM_CENTER_CENTER_RIGHT, positions.BOTTOM_CENTER_CENTER_LEFT]], [...positions.TOP_CENTER_CENTER_CENTER, [positions.BOTTOM_CENTER_CENTER_CENTER, positions.CENTER_RIGHT_CENTER_CENTER, positions.CENTER_LEFT_CENTER_CENTER]], // Bottom/Center
[...positions.BOTTOM_LEFT_CENTER_RIGHT, [positions.BOTTOM_RIGHT_CENTER_LEFT, positions.TOP_LEFT_CENTER_RIGHT, positions.TOP_RIGHT_CENTER_LEFT]], [...positions.BOTTOM_LEFT_CENTER_LEFT, [positions.BOTTOM_RIGHT_CENTER_RIGHT, positions.TOP_LEFT_CENTER_LEFT, positions.TOP_RIGHT_CENTER_RIGHT]], [...positions.BOTTOM_LEFT_CENTER_CENTER, [positions.BOTTOM_RIGHT_CENTER_CENTER, positions.TOP_LEFT_CENTER_CENTER, positions.TOP_RIGHT_CENTER_CENTER]], [...positions.BOTTOM_RIGHT_CENTER_RIGHT, [positions.BOTTOM_LEFT_CENTER_LEFT, positions.TOP_RIGHT_CENTER_RIGHT, positions.TOP_LEFT_CENTER_LEFT]], [...positions.BOTTOM_RIGHT_CENTER_LEFT, [positions.BOTTOM_LEFT_CENTER_RIGHT, positions.TOP_RIGHT_CENTER_LEFT, positions.TOP_LEFT_CENTER_RIGHT]], [...positions.BOTTOM_RIGHT_CENTER_CENTER, [positions.BOTTOM_LEFT_CENTER_CENTER, positions.TOP_RIGHT_CENTER_CENTER, positions.TOP_LEFT_CENTER_CENTER]], [...positions.BOTTOM_CENTER_CENTER_LEFT, [positions.BOTTOM_CENTER_CENTER_RIGHT, positions.TOP_CENTER_CENTER_LEFT, positions.TOP_CENTER_CENTER_RIGHT]], [...positions.BOTTOM_CENTER_CENTER_RIGHT, [positions.BOTTOM_CENTER_CENTER_LEFT, positions.TOP_CENTER_CENTER_RIGHT, positions.TOP_CENTER_CENTER_LEFT]], [...positions.BOTTOM_CENTER_CENTER_CENTER, [positions.TOP_CENTER_CENTER_CENTER, positions.LEFT_CENTER_CENTER_CENTER, positions.RIGHT_CENTER_CENTER_CENTER]], // Center/Top
[...positions.CENTER_RIGHT_TOP_LEFT, [positions.CENTER_LEFT_TOP_RIGHT, positions.CENTER_RIGHT_BOTTOM_LEFT, positions.CENTER_LEFT_BOTTOM_RIGHT]], [...positions.CENTER_RIGHT_TOP_RIGHT, [positions.CENTER_LEFT_TOP_LEFT, positions.CENTER_RIGHT_BOTTOM_RIGHT, positions.CENTER_LEFT_BOTTOM_LEFT]], [...positions.CENTER_RIGHT_TOP_CENTER, [positions.CENTER_LEFT_TOP_CENTER, positions.CENTER_RIGHT_BOTTOM_CENTER, positions.CENTER_LEFT_BOTTOM_CENTER]], [...positions.CENTER_LEFT_TOP_LEFT, [positions.CENTER_RIGHT_TOP_RIGHT, positions.CENTER_LEFT_BOTTOM_LEFT, positions.CENTER_RIGHT_BOTTOM_RIGHT]], [...positions.CENTER_LEFT_TOP_RIGHT, [positions.CENTER_RIGHT_TOP_LEFT, positions.CENTER_LEFT_BOTTOM_RIGHT, positions.CENTER_RIGHT_BOTTOM_LEFT]], [...positions.CENTER_LEFT_TOP_CENTER, [positions.CENTER_RIGHT_TOP_CENTER, positions.CENTER_LEFT_BOTTOM_CENTER, positions.CENTER_RIGHT_BOTTOM_CENTER]], [...positions.CENTER_CENTER_TOP_LEFT, [positions.CENTER_CENTER_TOP_RIGHT, positions.CENTER_CENTER_BOTTOM_LEFT, positions.CENTER_CENTER_BOTTOM_RIGHT]], [...positions.CENTER_CENTER_TOP_RIGHT, [positions.CENTER_CENTER_TOP_LEFT, positions.CENTER_CENTER_BOTTOM_RIGHT, positions.CENTER_CENTER_BOTTOM_LEFT]], [...positions.CENTER_CENTER_TOP_CENTER, [positions.CENTER_CENTER_BOTTOM_CENTER, positions.CENTER_CENTER_CENTER_RIGHT, positions.CENTER_CENTER_CENTER_LEFT]], // Center/Bottom
[...positions.CENTER_RIGHT_BOTTOM_LEFT, [positions.CENTER_LEFT_BOTTOM_RIGHT, positions.CENTER_RIGHT_TOP_LEFT, positions.CENTER_LEFT_TOP_RIGHT]], [...positions.CENTER_RIGHT_BOTTOM_RIGHT, [positions.CENTER_LEFT_BOTTOM_LEFT, positions.CENTER_RIGHT_TOP_RIGHT, positions.CENTER_LEFT_TOP_LEFT]], [...positions.CENTER_RIGHT_BOTTOM_CENTER, [positions.CENTER_LEFT_BOTTOM_CENTER, positions.CENTER_RIGHT_TOP_CENTER, positions.CENTER_LEFT_TOP_CENTER]], [...positions.CENTER_LEFT_BOTTOM_LEFT, [positions.CENTER_RIGHT_BOTTOM_RIGHT, positions.CENTER_LEFT_TOP_LEFT, positions.CENTER_RIGHT_TOP_RIGHT]], [...positions.CENTER_LEFT_BOTTOM_RIGHT, [positions.CENTER_RIGHT_BOTTOM_LEFT < positions.CENTER_LEFT_TOP_RIGHT, positions.CENTER_RIGHT_TOP_LEFT]], [...positions.CENTER_LEFT_BOTTOM_CENTER, [positions.CENTER_RIGHT_BOTTOM_CENTER, positions.CENTER_LEFT_TOP_CENTER, positions.CENTER_RIGHT_TOP_CENTER]], [...positions.CENTER_CENTER_BOTTOM_LEFT, [positions.CENTER_CENTER_BOTTOM_RIGHT, positions.CENTER_CENTER_TOP_LEFT, positions.CENTER_CENTER_TOP_RIGHT]], [...positions.CENTER_CENTER_BOTTOM_RIGHT, [positions.CENTER_CENTER_BOTTOM_LEFT, positions.CENTER_CENTER_TOP_RIGHT, positions.CENTER_CENTER_BOTTOM_LEFT]], [...positions.CENTER_CENTER_BOTTOM_CENTER, [positions.CENTER_CENTER_TOP_CENTER, positions.CENTER_CENTER_RIGHT_CENTER, positions.CENTER_CENTER_LEFT_CENTER]]];