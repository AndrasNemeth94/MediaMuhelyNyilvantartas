-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2020. Máj 07. 16:35
-- Kiszolgáló verziója: 10.4.11-MariaDB
-- PHP verzió: 7.3.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `nyilvantart`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `igenylesek`
--

CREATE TABLE `igenylesek` (
  `igeny_id` int(11) NOT NULL,
  `igenyelt_targy` varchar(200) NOT NULL,
  `targy_mennyiseg` int(11) NOT NULL,
  `igeny_idopont` varchar(200) NOT NULL,
  `igeny_vege` varchar(200) NOT NULL,
  `igenylo` varchar(200) NOT NULL,
  `elbiralt` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- A tábla adatainak kiíratása `igenylesek`
--

INSERT INTO `igenylesek` (`igeny_id`, `igenyelt_targy`, `targy_mennyiseg`, `igeny_idopont`, `igeny_vege`, `igenylo`, `elbiralt`) VALUES
(30, 'Panasonic Lumix', 1, 'Thu May 07 2020 14:33:45 GMT+0200 (közép-európai nyári idő)', '2020.06.4-5 4:00pm', 'Németh András', 'elfogadva');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `targyak`
--

CREATE TABLE `targyak` (
  `targy_id` int(11) NOT NULL,
  `targy_marka` varchar(100) NOT NULL,
  `targy_tipus` varchar(100) NOT NULL,
  `targy_db` int(11) NOT NULL,
  `targy_elerheto` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- A tábla adatainak kiíratása `targyak`
--

INSERT INTO `targyak` (`targy_id`, `targy_marka`, `targy_tipus`, `targy_db`, `targy_elerheto`) VALUES
(99, 'Panasonic', 'LUMIX S1H', 1, 'igen'),
(100, 'Rode', 'NTG5', 2, 'igen'),
(101, 'Rode', 'VideoMic Pro', 1, 'nem'),
(105, 'Panasonic', 'HS264O', 1, 'nem');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `neptun` varchar(6) NOT NULL,
  `firstName` varchar(100) NOT NULL,
  `lastName` varchar(100) NOT NULL,
  `username` text NOT NULL,
  `pwd` text NOT NULL,
  `email` text NOT NULL,
  `teamName` text NOT NULL,
  `regE` int(1) NOT NULL DEFAULT 1,
  `adminE` int(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- A tábla adatainak kiíratása `user`
--

INSERT INTO `user` (`id`, `neptun`, `firstName`, `lastName`, `username`, `pwd`, `email`, `teamName`, `regE`, `adminE`) VALUES
(1, '', 'admin', 'admin', 'admin', 'admin123', 'admin@gmail.com', '', 1, 2),
(2, 'MO6CL3', 'Dániel', 'Habonyi', 'danika', 'dani1234', 'danika@gmail.com', 'ászok', 1, 1),
(180, 'V1VIL3', 'Vivien', 'Csalárdi', 'vivikeh', 'vivien12', 'vivike@gmail.com', 'szuperCsapat', 1, 1),
(181, 'JV3LO5', 'Gáspár', 'Kalányos', 'kalika', 'kalany12', 'kalanyos@freemail.hu', 'szuperCsapat', 1, 1),
(185, 'DO6CL2', 'András', 'Németh', 'andris', 'andris12', 'nfsandris@gmail.com', 'szuperCsapat', 2, 1);

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `igenylesek`
--
ALTER TABLE `igenylesek`
  ADD PRIMARY KEY (`igeny_id`);

--
-- A tábla indexei `targyak`
--
ALTER TABLE `targyak`
  ADD PRIMARY KEY (`targy_id`);

--
-- A tábla indexei `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `igenylesek`
--
ALTER TABLE `igenylesek`
  MODIFY `igeny_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT a táblához `targyak`
--
ALTER TABLE `targyak`
  MODIFY `targy_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=106;

--
-- AUTO_INCREMENT a táblához `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=186;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
