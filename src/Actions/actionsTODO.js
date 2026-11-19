import {
  Add_task as ADD,
  Delete_task as DELETE,
  Update_task as UPDATE
} from "./typeTache"

export function Add_task(a, b) {
  return { type: ADD, payload: { nom: a, priorite: b } }
}

export function Delete_task(ind) {
  return { type: DELETE, payload: ind }
}

export function Update_task(ind, a, b) {
  return { type: UPDATE, payload: { id: ind, nom: a, priorite: b } }
}