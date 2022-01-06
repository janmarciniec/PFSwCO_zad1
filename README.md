**Schemat architektury systemu:**
![scheme](https://user-images.githubusercontent.com/69208755/148453520-22e3da12-1c77-4f9d-ae53-617174ca8ede.png)

**Opis działania usługi:**<br/>
Użytkownik komunikuje się z aplikacją opartą na React'cie, która odpowiada za wyświetlanie elementów na stronie. Aplikacja ta współpracuje z serwerem, którego zadaniem jest obsługa baz danych Postgres i Redis (przesyłanie i pobieranie danych do wyświetlenia na stronie). W Postgresie przechowywane są współczynniki wprowadzane przez użytkownika, zaś Redis zawiera pełne dane z historii kalkulatora.<br/>
W przypadku, gdy użytkownik wprowadza współczynnik, dla którego wartość chce wyliczyć, serwer jest o tym informowany przez aplikację i aktualizuje zawartość bazy danych. Redis jest informowany przez serwer o fakcie wprowadzenia nowych danych.<br/>
Worker, czyli część wykonawcza aplikacji, śledzi zmiany w Redisie. Jeśli pojawił się nowy współczynnik, Worker oblicza wartość danego elementu ciągu Fibonacciego i zwraca ją do Redisa.<br/>
Nginx pełni funkcję routera ścieżek.

**Główne modyfikacje w odniesieniu do Lab9:**
1. Uruchomienie skryptów Reacta z opcją --openssl-legacy-provider. W przeciwnym wypadku, uruchomienie usługi kończyło się błędem 502.
2. Dodanie do pliku Fib.js instrukcji, odpowiadających za wyświetlanie wprowadzonych współczynników oraz obliczonych wartości ciągu Fibonacciego.
3. Uniemożliwienie wprowadzania współczynników spoza przedziału [0, 20].
4. Wymaganie podania współczynnika przed próbą obliczenia wartości ciągu.

**Sposób uruchomienia opracowanej usługi:**<br/>
*docker compose up*

**Działająca usługa:**<br/>
![Zrzut ekranu (2168)](https://user-images.githubusercontent.com/69208755/148455129-a4ac1fbb-be8c-4406-a674-e7761cbee2ed.png)
![Zrzut ekranu (2169)](https://user-images.githubusercontent.com/69208755/148455130-d0ad8ccc-eeea-41f1-b84a-dcb104edc8ab.png)
![Zrzut ekranu (2170)](https://user-images.githubusercontent.com/69208755/148455136-4ad0428d-7ffa-4bfe-ae75-3e6b0e8b3c52.png)
![Zrzut ekranu (2172)](https://user-images.githubusercontent.com/69208755/148455149-5216f6ce-cb77-4552-a44e-fcc6297efe2a.png)
![Zrzut ekranu (2173)](https://user-images.githubusercontent.com/69208755/148455151-b7a76413-ceca-4383-80a1-bcfa222a5f0b.png)
![Zrzut ekranu (2174)](https://user-images.githubusercontent.com/69208755/148455160-50e49761-253d-48ab-b232-31265fd2be6f.png)
