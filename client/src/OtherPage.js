import React from 'react';
import scheme from './scheme.png';
import './App.css';

export default () => {
  return (
    <div>
      <h3>Schemat architektury systemu:</h3>
      <img src={scheme} alt="scheme"/>

      <h3>Opis działania usługi:</h3>
      <div class="description">
        <p>
          Użytkownik komunikuje się z aplikacją opartą na React'cie, która odpowiada za wyświetlanie elementów na stronie. 
          Aplikacja ta współpracuje z serwerem, którego zadaniem jest obsługa baz danych Postgres i Redis 
          (przesyłanie i pobieranie danych do wyświetlenia na stronie).
          W Postgresie przechowywane są współczynniki wprowadzane przez użytkownika, zaś Redis zawiera pełne dane z historii kalkulatora.
        </p>
        <p>
          W przypadku, gdy użytkownik wprowadza współczynnik, dla którego wartość chce wyliczyć, 
          serwer jest o tym informowany przez aplikację i aktualizuje zawartość bazy danych.
          Redis jest informowany przez serwer o fakcie wprowadzenia nowych danych.
        </p>
        <p>
          Worker, czyli część wykonawcza aplikacji, śledzi zmiany w Redisie. 
          Jeśli pojawił się nowy współczynnik, Worker oblicza wartość danego elementu ciągu Fibonacciego i zwraca ją do Redisa.
        </p>
        <p>
          Nginx pełni funkcję routera ścieżek.
        </p>
      </div>

      <h3>Główne modyfikacje w odniesieniu do Lab9:</h3>
      <div class="description">
        <ol>
          <li>Uruchomienie skryptów Reacta z opcją --openssl-legacy-provider. W przeciwnym wypadku, uruchomienie usługi kończyło się błędem 502.</li>
          <li>Dodanie do pliku Fib.js instrukcji, odpowiadających za wyświetlanie wprowadzonych współczynników oraz obliczonych wartości ciągu Fibonacciego.</li>
          <li>Uniemożliwienie wprowadzania współczynników spoza przedziału [0, 20].</li>
          <li>Wymaganie podania współczynnika przed próbą obliczenia wartości ciągu.</li>
        </ol>
      </div>
    </div>
  );
};
