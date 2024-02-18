import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Genera una clase de nombres (classname) combinando múltiples inputs.
 * @param {...string} inputs - Los nombres de clase a combinar.
 * @returns {string} - La clase de nombres combinada.
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
