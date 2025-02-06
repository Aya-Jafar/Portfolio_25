import { ref, onMounted, onUnmounted } from "vue";

/**
 * A reusable Vue composable that observes an element's visibility within the viewport.
 *
 * @param {number} [threshold=0.3] - The percentage of the element that must be visible before triggering.
 * @returns {{
 *   isInView: import("vue").Ref<boolean>,
 *   targetRef: import("vue").Ref<HTMLElement | null>
 * }} - An object containing:
 *   - `isInView` (Ref<boolean>): Whether the element is in view.
 *   - `targetRef` (Ref<HTMLElement | null>): The ref that should be assigned to the target element.
 *
 * @example
 * ```ts
 * const { isInView, targetRef } = useIntersectionObserver(0.5);
 * ```
 * In the template:
 * ```vue
 * <div ref="targetRef" :class="{ 'visible': isInView }">Content</div>
 * ```
 */
export function useIntersectionObserver(threshold = 0.3) {
  const isInView = ref(false);
  const targetRef = ref<HTMLElement | null>(null);
  let observer: IntersectionObserver | null = null;

  /**
   * Handles intersection changes and updates the `isInView` state.
   * @param {IntersectionObserverEntry[]} entries - The intersection entries.
   */
  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    isInView.value = entries[0].isIntersecting;
  };

  /**
   * Sets up the IntersectionObserver and starts observing the target element.
   * This runs when the component is mounted.
   */
  onMounted(() => {
    if (targetRef.value) {
      observer = new IntersectionObserver(handleIntersection, {
        root: null,
        threshold,
      });
      observer.observe(targetRef.value);
    }
  });

  /**
   * Disconnects the observer when the component is unmounted
   * to prevent memory leaks.
   */
  onUnmounted(() => {
    observer?.disconnect();
  });

  return { isInView, targetRef };
}
