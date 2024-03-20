-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 19, 2023 at 07:27 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `horrorgameforum`
--

-- --------------------------------------------------------

--
-- Table structure for table `komentari`
--

CREATE TABLE `komentari` (
  `ID` int(144) NOT NULL,
  `Teksts` varchar(144) NOT NULL,
  `Laiks/datums` datetime NOT NULL,
  `Zinas_ID` int(144) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `lietotajs_admins`
--

CREATE TABLE `lietotajs_admins` (
  `ID` int(11) NOT NULL,
  `Lietotajvards` varchar(14) NOT NULL,
  `Vards` varchar(14) NOT NULL,
  `Uzvards` varchar(14) NOT NULL,
  `E-pasts` varchar(144) NOT NULL,
  `Administrators` tinyint(1) NOT NULL,
  `Parole` varchar(144) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `lietotajs_admins`
--

INSERT INTO `lietotajs_admins` (`ID`, `Lietotajvards`, `Vards`, `Uzvards`, `E-pasts`, `Administrators`, `Parole`) VALUES
(3, 'flexlv', 'Ernests', 'Dejus', 'ernisd62131231@gmail.com', 0, '$2y$10$6/e1Vh5rL1s0q2.G4o9hN.d5iccfjllpjQTxLTgYPlQVQ5lMkBrCe'),
(4, 'flexlv312', 'Ernests', 'Dejus', 'flexlv@gmai.com', 0, '$2y$10$gxTNGtNzgHp9Rd/wfIhs.O74xm5GUcQT40hwqS.2D0KLMXhl3CJgu'),
(5, 'aboba123', 'Ernests', 'Dejus', 'ernisd621@gmail.com', 0, '$2y$10$2cuyHjxQ1YcJ1A1mdBF4f.ohnj/BIRScJZHvaGN92.AFcEIe.0YG2');

-- --------------------------------------------------------

--
-- Table structure for table `speles_perosnazs`
--

CREATE TABLE `speles_perosnazs` (
  `ID` int(144) NOT NULL,
  `Kostumizacijas_nummurs` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `zinas`
--

CREATE TABLE `zinas` (
  `ID` int(144) NOT NULL,
  `Virsraksts` varchar(25) NOT NULL,
  `Attels` varchar(144) NOT NULL,
  `Laiks/datums` datetime NOT NULL,
  `Teksts` varchar(144) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `komentari`
--
ALTER TABLE `komentari`
  ADD KEY `Zinas_ID` (`Zinas_ID`);

--
-- Indexes for table `lietotajs_admins`
--
ALTER TABLE `lietotajs_admins`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `zinas`
--
ALTER TABLE `zinas`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `lietotajs_admins`
--
ALTER TABLE `lietotajs_admins`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `komentari`
--
ALTER TABLE `komentari`
  ADD CONSTRAINT `Zinas_ID` FOREIGN KEY (`Zinas_ID`) REFERENCES `zinas` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
