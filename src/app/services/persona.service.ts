import { Injectable } from '@angular/core';
import {Persona} from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  generarPersonas(cantidad: number = 200): Persona[] {
    const personas: Persona[] = [];
    for(let i=1; i <= cantidad; i++){
      personas.push({
        id: i,
        nombre: `Persona ${i}`,
        edad: 18 + (i%50),
        email: `persona${i}@ejemplo.com`,
      })
    }
    return personas;
  }
}
