import { Add_task,Delete_task,Update_task } from "./typeTache"

export function Add_task(a, b) {
  return { type: Add_task, payload: { nom: a, priorite: b } }
}

export function Delete_task(ind) {
  return { type: Delete_task, payload: ind }
}

export function Update_task(ind, a, b) {
  return { type: Update_task, payload: { id: ind, nom: a, priorite: b } }
}