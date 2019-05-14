-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le :  jeu. 09 mai 2019 à 02:26
-- Version du serveur :  10.1.38-MariaDB
-- Version de PHP :  7.2.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `PFA2`
--

-- --------------------------------------------------------

--
-- Structure de la table `Article`
--

CREATE TABLE `Article` (
  `numArticle` int(11) NOT NULL,
  `categorie` varchar(254) DEFAULT NULL,
  `prix` float DEFAULT NULL,
  `nomArticle` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `Article`
--

INSERT INTO `Article` (`numArticle`, `categorie`, `prix`, `nomArticle`) VALUES
(1, 'CAR', 10000, NULL),
(2, 'PIECE', 1000, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `association6`
--

CREATE TABLE `association6` (
  `numCommande` int(11) NOT NULL,
  `cin` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `association8`
--

CREATE TABLE `association8` (
  `numCommande` int(11) NOT NULL,
  `numArticle` int(11) NOT NULL,
  `nbArticle` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `Clients`
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
-- Déchargement des données de la table `Clients`
--

INSERT INTO `Clients` (`cin`, `email`, `pwd`, `nomClient`, `prenomClient`, `telephone`, `adresse`, `dateNais`, `sexe`) VALUES
(1, 'ablouch.aaa@gmail.com', '$2b$10$LsDneYNqGdwB0jeAOGeDo.pkqNZN5qEt.erovZduDaDkECpaKByvW', 'abla', 'aa', 123, 'lzdolz', NULL, 'Male'),
(2, 'ahmed@gmail.com', '$2b$10$RB00M56szk4kzAZU.klnBOju.H8wtTQ1Xd1vMAK65V4uTJdTGvql6', 'ahmed', 'zayati', 1231, 'zdzd', NULL, 'Female');

-- --------------------------------------------------------

--
-- Structure de la table `Commandes`
--

CREATE TABLE `Commandes` (
  `numCommande` int(11) NOT NULL,
  `idFacture` int(11) DEFAULT NULL,
  `cin` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `Factures`
--

CREATE TABLE `Factures` (
  `idFacture` int(11) NOT NULL,
  `dateFacture` datetime DEFAULT NULL,
  `modePayement` varchar(254) DEFAULT NULL,
  `montatnt` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `Marque`
--

CREATE TABLE `Marque` (
  `numMarque` int(11) NOT NULL,
  `nomMarque` varchar(254) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `Marque`
--

INSERT INTO `Marque` (`numMarque`, `nomMarque`) VALUES
(1, 'BMW'),
(2, 'AUDI');

-- --------------------------------------------------------

--
-- Structure de la table `Modele`
--

CREATE TABLE `Modele` (
  `numModele` int(11) NOT NULL,
  `numMarque` int(11) NOT NULL,
  `nomModele` varchar(254) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `Modele`
--

INSERT INTO `Modele` (`numModele`, `numMarque`, `nomModele`) VALUES
(1, 2, 'AudiQ5'),
(2, 1, 'BMWA7');

-- --------------------------------------------------------

--
-- Structure de la table `Personnels`
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
-- Déchargement des données de la table `Personnels`
--

INSERT INTO `Personnels` (`cin`, `email`, `password`, `nomPersonnel`, `prenomPersonnel`, `telephone`, `adresse`, `dateEmbauche`, `grade`, `pseudo`, `salaire`, `position`) VALUES
(9, 'admin@gmail.com', '$2b$10$RB00M56szk4kzAZU.klnBOju.H8wtTQ1Xd1vMAK65V4uTJdTGvql6', 'admin', 'admin', 26545, 'hgbh', '2019-05-06 00:00:00', '1', 'admin', 123, 'admin'),
(10, 'abla@gmail.com', '123', 'abla', 'abla', 12346, 'khkh', '2019-05-16 00:00:00', '1', 'ablouch', 6546, 'chef'),
(11, 'abla.ammami@gmail.com', '0', 'abla', 'ammami', 5412, 'dkqklx', '2019-05-02 00:00:00', '1', 'ablouch', 545, 'kja'),
(12, 'aaaaa@gmail.com', '$2b$10$nGZx0liF9iCyXaIpRPTywOLSAtifNQmHAzIJWFVSer0J1cc9Jrr/C', 'aaa', 'aaa', 123456, 'yhj', '2019-05-15 00:00:00', '1', 'aaa', 6413, 'khj');

-- --------------------------------------------------------

--
-- Structure de la table `Pieces`
--

CREATE TABLE `Pieces` (
  `numArticle` int(11) NOT NULL,
  `type` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `Vehicule`
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
-- Déchargement des données de la table `Vehicule`
--

INSERT INTO `Vehicule` (`numArticle`, `numVehicule`, `numMarque`, `couleur`, `prix`, `path`, `description`, `nomVehicule`, `nomMarque`) VALUES
(1, 123459, 1, 'back', 9895, 'dd.jpg', 'this car is awsome', 'BMW1', 'bmw'),
(1, 123460, 1, 'pink', 999, 'ccc.jpg', 'aaa', 'BMW2', 'bmw'),
(1, 123461, 1, 'black', 9999, 'bbb.jpg', 'aaa', 'BMW5', 'bmw'),
(1, 123464, 2, 'black', 565, 'aaa.jpeg', 'aa', 'AUDI1', 'audi'),
(1, 123466, 2, 'black', 88, 'AudiA6.jpg', 'aaa', 'AUDIQ8', 'audi'),
(1, 123467, 2, 'black', 88, 'AudiQ5.jpg', 'aaa', 'AUDIQ4', 'audi'),
(1, 123468, 2, 'black', 55, 'AudiQ3.jpg', 'aaa', 'audiA7', 'audi'),
(1, 123469, 2, 'black', 55, 'AudiQ3.jpg', 'aaa', 'audiQ5', 'audi'),
(1, 123471, 2, 'BLACK', 789, 'dd.jpg', 'AAA', 'AUDI02', 'audi'),
(1, 123472, 2, 'PINK', 651, 'AudiA3.jpg', 'AAA', 'audi01', 'audi'),
(1, 123473, 1, 'bleu', 564, 'AudiQ5.jpg', 'aaa', 'bmw02', 'bmw'),
(1, 123474, 2, 'bleu', 564, 'AudiA6.jpg', 'aaa', 'AudiA6', 'audi'),
(1, 123475, 1, 'bleu', 564, 'AudiA6.jpg', 'aaa', 'AudiA6', 'bmw'),
(1, 123476, 1, 'bleu', 564, 'A.jpg', 'aaa', 'AudiA8', 'bmw');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `Article`
--
ALTER TABLE `Article`
  ADD PRIMARY KEY (`numArticle`);

--
-- Index pour la table `association6`
--
ALTER TABLE `association6`
  ADD PRIMARY KEY (`numCommande`,`cin`);

--
-- Index pour la table `association8`
--
ALTER TABLE `association8`
  ADD PRIMARY KEY (`numCommande`,`numArticle`);

--
-- Index pour la table `Clients`
--
ALTER TABLE `Clients`
  ADD PRIMARY KEY (`cin`);

--
-- Index pour la table `Commandes`
--
ALTER TABLE `Commandes`
  ADD PRIMARY KEY (`numCommande`),
  ADD KEY `FK_association5` (`idFacture`),
  ADD KEY `FK_association7` (`cin`);

--
-- Index pour la table `Factures`
--
ALTER TABLE `Factures`
  ADD PRIMARY KEY (`idFacture`);

--
-- Index pour la table `Marque`
--
ALTER TABLE `Marque`
  ADD PRIMARY KEY (`numMarque`);

--
-- Index pour la table `Modele`
--
ALTER TABLE `Modele`
  ADD PRIMARY KEY (`numModele`),
  ADD KEY `FK_association9` (`numMarque`);

--
-- Index pour la table `Personnels`
--
ALTER TABLE `Personnels`
  ADD PRIMARY KEY (`cin`);

--
-- Index pour la table `Pieces`
--
ALTER TABLE `Pieces`
  ADD PRIMARY KEY (`numArticle`);

--
-- Index pour la table `Vehicule`
--
ALTER TABLE `Vehicule`
  ADD PRIMARY KEY (`numArticle`,`numVehicule`),
  ADD KEY `FK_association1` (`numMarque`),
  ADD KEY `numVehicule` (`numVehicule`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `Article`
--
ALTER TABLE `Article`
  MODIFY `numArticle` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `Clients`
--
ALTER TABLE `Clients`
  MODIFY `cin` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `Commandes`
--
ALTER TABLE `Commandes`
  MODIFY `numCommande` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `Factures`
--
ALTER TABLE `Factures`
  MODIFY `idFacture` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `Marque`
--
ALTER TABLE `Marque`
  MODIFY `numMarque` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `Modele`
--
ALTER TABLE `Modele`
  MODIFY `numModele` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `Personnels`
--
ALTER TABLE `Personnels`
  MODIFY `cin` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT pour la table `Pieces`
--
ALTER TABLE `Pieces`
  MODIFY `numArticle` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `Vehicule`
--
ALTER TABLE `Vehicule`
  MODIFY `numVehicule` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=123477;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `association6`
--
ALTER TABLE `association6`
  ADD CONSTRAINT `FK_association6` FOREIGN KEY (`numCommande`) REFERENCES `Commandes` (`numCommande`);

--
-- Contraintes pour la table `Commandes`
--
ALTER TABLE `Commandes`
  ADD CONSTRAINT `FK_association5` FOREIGN KEY (`idFacture`) REFERENCES `Factures` (`idFacture`),
  ADD CONSTRAINT `FK_association7` FOREIGN KEY (`cin`) REFERENCES `Clients` (`cin`);

--
-- Contraintes pour la table `Modele`
--
ALTER TABLE `Modele`
  ADD CONSTRAINT `FK_association9` FOREIGN KEY (`numMarque`) REFERENCES `Marque` (`numMarque`);

--
-- Contraintes pour la table `Pieces`
--
ALTER TABLE `Pieces`
  ADD CONSTRAINT `FK_Generalisation_3` FOREIGN KEY (`numArticle`) REFERENCES `Article` (`numArticle`);

--
-- Contraintes pour la table `Vehicule`
--
ALTER TABLE `Vehicule`
  ADD CONSTRAINT `FK_Generalisation_2` FOREIGN KEY (`numArticle`) REFERENCES `Article` (`numArticle`),
  ADD CONSTRAINT `FK_association1` FOREIGN KEY (`numMarque`) REFERENCES `Marque` (`numMarque`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
