import { Component, inject, ChangeDetectorRef, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

import {
  IonContent,
  IonFab,
  IonFabButton,
  IonIcon,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonText,
  IonProgressBar,
  IonSpinner, IonToolbar, IonHeader, IonTitle } from '@ionic/angular';

import { addIcons } from 'ionicons';
import { close } from 'ionicons/icons';

import { Pokemon } from '../../services/pokemon';
import { IPokemon } from '../../models/pokemon.model';
import { GetStatPipe } from '../../pipes/get-stat-pipe';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.page.html',
  styleUrls: ['./detail-pokemon.page.scss'],
  imports: [ 
    CommonModule,
    RouterModule,
    GetStatPipe,
    IonContent,
    IonFab,
    IonFabButton,
    IonIcon,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonGrid,
    IonRow,
    IonCol,
    IonImg,
    IonText,
    IonProgressBar,
    IonSpinner
  ]
})
export class DetailPokemonPage  {

  private route = inject(ActivatedRoute);
  private pokemonService = inject(Pokemon);

  public pokemon = signal<IPokemon | null>(null);
  public loading = signal(true);

  constructor() {
    addIcons({ close });
  }

  ionViewWillEnter() { {

    const idParam = this.route.snapshot.paramMap.get('id');

    if (!idParam) {
      this.loading.set(false);
      return;
    }

    const id = Number(idParam);

    this.pokemonService.getPokemon(id)
      .then(data => {
        this.pokemon.set(data);
      })
      .catch(error => {
        console.error('Error al obtener Pokémon:', error);
      })
      .finally(() => {
        this.loading.set(false);
      });
  }
  }
}
