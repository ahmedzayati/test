-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 10, 2019 at 07:06 AM
-- Server version: 10.1.37-MariaDB
-- PHP Version: 7.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `PFA2`
--

-- --------------------------------------------------------

--
-- Table structure for table `Article`
--

CREATE TABLE `Article` (
  `numArticle` int(11) NOT NULL,
  `categorie` varchar(254) DEFAULT NULL,
  `prix` float DEFAULT NULL,
  `nomArticle` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Article`
--

INSERT INTO `Article` (`numArticle`, `categorie`, `prix`, `nomArticle`) VALUES
(1, 'CAR', 10000, NULL),
(2, 'PIECE', 1000, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `association6`
--

CREATE TABLE `association6` (
  `numCommande` int(11) NOT NULL,
  `cin` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `association8`
--

CREATE TABLE `association8` (
  `numCommande` int(11) NOT NULL,
  `numVehicule` int(11) NOT NULL,
  `nbArticle` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `association8`
--

INSERT INTO `association8` (`numCommande`, `numVehicule`, `nbArticle`) VALUES
(16, 123473, 1);

-- --------------------------------------------------------

--
-- Table structure for table `Clients`
--

CREATE TABLE `Clients` (
  `cin` int(11) NOT NULL,
  `email` varchar(254) DEFAULT NULL,
  `pwd` varchar(254) DEFAULT NULL,
  `nomClient` varchar(254) DEFAULT NULL,
  `prenomClient` varchar(254) DEFAULT NULL,
  `telephone` int(11) DEFAULT NULL,
  `adresse` varchar(254) DEFAULT NULL,
  `dateNais` datetime DEFAULT NULL,
  `sexe` varchar(254) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Clients`
--

INSERT INTO `Clients` (`cin`, `email`, `pwd`, `nomClient`, `prenomClient`, `telephone`, `adresse`, `dateNais`, `sexe`) VALUES
(1, 'ablouch.aaa@gmail.com', '$2b$10$LsDneYNqGdwB0jeAOGeDo.pkqNZN5qEt.erovZduDaDkECpaKByvW', 'abla', 'aa', 123, 'lzdolz', NULL, 'Male'),
(2, 'ahmed@gmail.com', '$2b$10$RB00M56szk4kzAZU.klnBOju.H8wtTQ1Xd1vMAK65V4uTJdTGvql6', 'ahmed', 'zayati', 1231, 'zdzd', NULL, 'Female');

-- --------------------------------------------------------

--
-- Table structure for table `commandes`
--

CREATE TABLE `commandes` (
  `numCommande` int(11) NOT NULL,
  `cin` int(11) NOT NULL,
  `adresse` varchar(255) NOT NULL,
  `date` date NOT NULL,
  `pays` varchar(255) NOT NULL,
  `ville` varchar(255) NOT NULL,
  `zip` varchar(255) NOT NULL,
  `telephone` varchar(255) NOT NULL,
  `path` varchar(255) NOT NULL,
  `etat` varchar(255) NOT NULL DEFAULT 'en attente'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `commandes`
--

INSERT INTO `commandes` (`numCommande`, `cin`, `adresse`, `date`, `pays`, `ville`, `zip`, `telephone`, `path`, `etat`) VALUES
(1, 2, 'aaa', '0000-00-00', 'Austria', 'aaaa', 'aaa', '028658475', '', ''),
(2, 2, 'aaa', '2019-05-10', 'Austria', 'aaaa', 'aaa', '028658475', '', ''),
(3, 2, 'aaa', '2019-05-10', 'Austria', 'aaaa', 'aaa', '028658475', 'si-Copie.pdf', ''),
(4, 2, 'aaa', '2019-05-10', 'Austria', 'aaaa', 'aaa', '028658475', 'si-Copie.pdf', ''),
(7, 2, 'aaa', '2019-05-10', 'Austria', 'aaaa', 'aaa', '028658475', 'si-Copie.pdf', ''),
(8, 2, 'aaa', '2019-05-10', 'Austria', 'aaaa', 'aaa', '028658475', 'si-Copie.pdf', ''),
(9, 2, 'aaa', '2019-05-10', 'Austria', 'aaaa', 'aaa', '028658475', 'si-Copie.pdf', ''),
(10, 2, 'aaa', '2019-05-10', 'Austria', 'aaaa', 'aaa', '028658475', 'si-Copie.pdf', ''),
(11, 2, 'aaa', '2019-05-10', 'Austria', 'aaaa', 'aaa', '028658475', 'si-Copie.pdf', ''),
(13, 2, 'aaa', '2019-05-10', 'Austria', 'aaaa', 'aaa', '028658475', 'si-Copie.docx', ''),
(14, 2, 'aaa', '2019-05-10', 'Austria', 'aaaa', 'aaa', '028658475', 'si-Copie.docx', ''),
(15, 2, 'aaa', '2019-05-10', 'Austria', 'aaaa', 'aaa', '028658475', 'si-Copie.docx', ''),
(16, 2, 'aaa', '2019-05-10', 'Austria', 'aaaa', 'aaa', '028658475', 'si-Copie.docx', '');

-- --------------------------------------------------------

--
-- Table structure for table `Factures`
--

CREATE TABLE `Factures` (
  `idFacture` int(11) NOT NULL,
  `dateFacture` datetime DEFAULT NULL,
  `modePayement` varchar(254) DEFAULT NULL,
  `montatnt` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `Marque`
--

CREATE TABLE `Marque` (
  `numMarque` int(11) NOT NULL,
  `nomMarque` varchar(254) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Marque`
--

INSERT INTO `Marque` (`numMarque`, `nomMarque`) VALUES
(1, 'BMW'),
(2, 'AUDI');

-- --------------------------------------------------------

--
-- Table structure for table `Modele`
--

CREATE TABLE `Modele` (
  `numModele` int(11) NOT NULL,
  `numMarque` int(11) NOT NULL,
  `nomModele` varchar(254) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Modele`
--

INSERT INTO `Modele` (`numModele`, `numMarque`, `nomModele`) VALUES
(1, 2, 'AudiQ5'),
(2, 1, 'BMWA7');

-- --------------------------------------------------------

--
-- Table structure for table `Personnels`
--

CREATE TABLE `Personnels` (
  `cin` int(11) NOT NULL,
  `email` varchar(254) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `nomPersonnel` varchar(254) DEFAULT NULL,
  `prenomPersonnel` varchar(254) DEFAULT NULL,
  `telephone` int(11) DEFAULT NULL,
  `adresse` varchar(254) DEFAULT NULL,
  `dateEmbauche` datetime DEFAULT NULL,
  `grade` varchar(254) DEFAULT NULL,
  `pseudo` varchar(255) NOT NULL,
  `salaire` int(11) NOT NULL,
  `position` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Personnels`
--

INSERT INTO `Personnels` (`cin`, `email`, `password`, `nomPersonnel`, `prenomPersonnel`, `telephone`, `adresse`, `dateEmbauche`, `grade`, `pseudo`, `salaire`, `position`) VALUES
(9, 'admin@gmail.com', '$2b$10$RB00M56szk4kzAZU.klnBOju.H8wtTQ1Xd1vMAK65V4uTJdTGvql6', 'admin', 'admin', 26545, 'hgbh', '2019-05-06 00:00:00', '1', 'admin', 123, 'admin'),
(10, 'abla@gmail.com', '123', 'abla', 'abla', 12346, 'khkh', '2019-05-16 00:00:00', '1', 'ablouch', 6546, 'chef'),
(11, 'abla.ammami@gmail.com', '0', 'abla', 'ammami', 5412, 'dkqklx', '2019-05-02 00:00:00', '1', 'ablouch', 545, 'kja'),
(12, 'aaaaa@gmail.com', '$2b$10$nGZx0liF9iCyXaIpRPTywOLSAtifNQmHAzIJWFVSer0J1cc9Jrr/C', 'aaa', 'aaa', 123456, 'yhj', '2019-05-15 00:00:00', '1', 'aaa', 6413, 'khj');

-- --------------------------------------------------------

--
-- Table structure for table `Pieces`
--

CREATE TABLE `Pieces` (
  `numArticle` int(11) NOT NULL,
  `type` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `Vehicule`
--

CREATE TABLE `Vehicule` (
  `numArticle` int(11) NOT NULL,
  `numVehicule` int(11) NOT NULL,
  `numMarque` int(11) NOT NULL,
  `couleur` varchar(254) DEFAULT NULL,
  `prix` int(11) NOT NULL,
  `path` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `nomVehicule` varchar(255) DEFAULT NULL,
  `nomMarque` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Vehicule`
--

INSERT INTO `Vehicule` (`numArticle`, `numVehicule`, `numMarque`, `couleur`, `prix`, `path`, `description`, `nomVehicule`, `nomMarque`) VALUES
(1, 123459, 1, 'back', 9895, 'dd.jpg', 'this car is awsome', 'BMW1', 'bmw'),
(1, 123460, 1, 'pink', 999, 'ccc.jpg', 'aaa', 'BMW2', 'bmw'),
(1, 123461, 1, 'black', 9999, 'bbb.jpg', 'aaa', 'BMW5', 'bmw'),
(1, 123464, 2, 'black', 565, 'aaa.jpeg', 'aa', 'AUDI1', 'audi'),
(1, 123466, 2, 'black', 88, 'AudiA6.jpg', 'aaa', 'AUDIQ8', 'audi'),
(1, 123468, 2, 'black', 55, 'AudiQ3.jpg', 'aaa', 'audiA7', 'audi'),
(1, 123469, 2, 'black', 55, 'AudiQ3.jpg', 'aaa', 'audiQ5', 'audi'),
(1, 123471, 2, 'BLACK', 789, 'dd.jpg', 'AAA', 'AUDI02', 'audi'),
(1, 123472, 2, 'PINK', 651, 'AudiA3.jpg', 'AAA', 'audi01', 'audi'),
(1, 123473, 1, 'bleu', 564, 'AudiQ5.jpg', 'aaa', 'bmw02', 'bmw'),
(1, 123474, 2, 'bleu', 564, 'AudiA6.jpg', 'aaa', 'AudiA6', 'audi'),
(1, 123476, 1, 'bleu', 564, 'A.jpg', 'aaa', 'AudiA8', 'bmw');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Article`
--
ALTER TABLE `Article`
  ADD PRIMARY KEY (`numArticle`);

--
-- Indexes for table `association6`
--
ALTER TABLE `association6`
  ADD PRIMARY KEY (`numCommande`,`cin`);

--
-- Indexes for table `association8`
--
ALTER TABLE `association8`
  ADD PRIMARY KEY (`numCommande`,`numVehicule`);

--
-- Indexes for table `Clients`
--
ALTER TABLE `Clients`
  ADD PRIMARY KEY (`cin`);

--
-- Indexes for table `commandes`
--
ALTER TABLE `commandes`
  ADD PRIMARY KEY (`numCommande`),
  ADD KEY `fk` (`cin`);

--
-- Indexes for table `Factures`
--
ALTER TABLE `Factures`
  ADD PRIMARY KEY (`idFacture`);

--
-- Indexes for table `Marque`
--
ALTER TABLE `Marque`
  ADD PRIMARY KEY (`numMarque`);

--
-- Indexes for table `Modele`
--
ALTER TABLE `Modele`
  ADD PRIMARY KEY (`numModele`),
  ADD KEY `FK_association9` (`numMarque`);

--
-- Indexes for table `Personnels`
--
ALTER TABLE `Personnels`
  ADD PRIMARY KEY (`cin`);

--
-- Indexes for table `Pieces`
--
ALTER TABLE `Pieces`
  ADD PRIMARY KEY (`numArticle`);

--
-- Indexes for table `Vehicule`
--
ALTER TABLE `Vehicule`
  ADD PRIMARY KEY (`numArticle`,`numVehicule`),
  ADD KEY `FK_association1` (`numMarque`),
  ADD KEY `numVehicule` (`numVehicule`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Article`
--
ALTER TABLE `Article`
  MODIFY `numArticle` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `Clients`
--
ALTER TABLE `Clients`
  MODIFY `cin` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `commandes`
--
ALTER TABLE `commandes`
  MODIFY `numCommande` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `Factures`
--
ALTER TABLE `Factures`
  MODIFY `idFacture` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Marque`
--
ALTER TABLE `Marque`
  MODIFY `numMarque` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `Modele`
--
ALTER TABLE `Modele`
  MODIFY `numModele` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `Personnels`
--
ALTER TABLE `Personnels`
  MODIFY `cin` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `Pieces`
--
ALTER TABLE `Pieces`
  MODIFY `numArticle` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Vehicule`
--
ALTER TABLE `Vehicule`
  MODIFY `numVehicule` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=123518;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `association6`
--
ALTER TABLE `association6`
  ADD CONSTRAINT `FK_association6` FOREIGN KEY (`numCommande`) REFERENCES `Commandes` (`numCommande`);

--
-- Constraints for table `commandes`
--
ALTER TABLE `commandes`
  ADD CONSTRAINT `fk` FOREIGN KEY (`cin`) REFERENCES `Clients` (`cin`);

--
-- Constraints for table `Modele`
--
ALTER TABLE `Modele`
  ADD CONSTRAINT `FK_association9` FOREIGN KEY (`numMarque`) REFERENCES `Marque` (`numMarque`);

--
-- Constraints for table `Pieces`
--
ALTER TABLE `Pieces`
  ADD CONSTRAINT `FK_Generalisation_3` FOREIGN KEY (`numArticle`) REFERENCES `Article` (`numArticle`);

--
-- Constraints for table `Vehicule`
--
ALTER TABLE `Vehicule`
  ADD CONSTRAINT `FK_Generalisation_2` FOREIGN KEY (`numArticle`) REFERENCES `Article` (`numArticle`),
  ADD CONSTRAINT `FK_association1` FOREIGN KEY (`numMarque`) REFERENCES `Marque` (`numMarque`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
