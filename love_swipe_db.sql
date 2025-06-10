-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 10, 2025 at 08:52 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `love_swipe_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `email`, `password`, `timestamp`) VALUES
(2, 'admin@gmail.com', '$2b$10$EI3/UbKLWM4wqfkF2olU1upOdlI2lp2G1oVbo3F/CQ2wxNum.3pFq', '2025-04-28 06:48:20');

-- --------------------------------------------------------

--
-- Table structure for table `block`
--

CREATE TABLE `block` (
  `id` int(11) NOT NULL,
  `blockerId` int(11) NOT NULL,
  `blockedId` int(11) NOT NULL,
  `createdAt` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `matches`
--

CREATE TABLE `matches` (
  `id` int(11) NOT NULL,
  `user1Id` int(11) NOT NULL,
  `user2Id` int(11) NOT NULL,
  `isMutual` tinyint(1) DEFAULT 0,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `matches`
--

INSERT INTO `matches` (`id`, `user1Id`, `user2Id`, `isMutual`, `timestamp`) VALUES
(132, 46, 11, 0, '2025-05-16 11:06:47'),
(135, 47, 11, 0, '2025-05-16 11:17:15'),
(141, 47, 44, 0, '2025-05-16 11:17:31'),
(161, 49, 46, 0, '2025-05-20 15:39:59'),
(164, 49, 47, 0, '2025-05-20 15:40:03'),
(165, 49, 11, 0, '2025-05-20 15:40:04'),
(172, 49, 44, 0, '2025-05-20 16:56:58'),
(190, 50, 49, 0, '2025-05-21 17:31:20'),
(191, 50, 11, 0, '2025-05-21 17:34:46'),
(200, 49, 50, 0, '2025-05-29 12:53:52');

-- --------------------------------------------------------

--
-- Table structure for table `message`
--

CREATE TABLE `message` (
  `id` int(11) NOT NULL,
  `senderId` int(11) NOT NULL,
  `receiverId` int(11) NOT NULL,
  `content` text NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `passwordresettoken`
--

CREATE TABLE `passwordresettoken` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `token` varchar(255) NOT NULL,
  `expiresAt` datetime NOT NULL,
  `createdAt` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `bio` text DEFAULT NULL,
  `birth` date DEFAULT NULL,
  `gender` varchar(10) DEFAULT NULL,
  `location` varchar(100) DEFAULT NULL,
  `interests` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`interests`)),
  `profilePicture` text DEFAULT NULL,
  `profilePictures` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`profilePictures`)),
  `verified` tinyint(1) DEFAULT 0,
  `isPremium` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `email`, `password`, `bio`, `birth`, `gender`, `location`, `interests`, `profilePicture`, `profilePictures`, `verified`, `isPremium`) VALUES
(11, 'chelsea', 'chelsea@gmail.com', '$2b$10$./qVEqCfAFL6rvBHPPjkuOVk8WH3/EpXMxwOM1JiGhY7isFD9ZFmG', NULL, '2000-05-25', 'male', NULL, NULL, 'https://thumbs.dreamstime.com/b/chelsea-f-c-87278714.jpg', NULL, 0, 0),
(44, 'teste oficial', 'swipetestweb@gmail.com', '$2b$10$9n3FR9onhA.A7usoDO5gtekAkZNu1C1754fHR6KDpGLBKO2Ww2ar2', NULL, '2007-05-10', 'Male', NULL, NULL, '', '[]', 0, 0),
(46, 'teste oficial', 'testeoficial818@gmail.com', '$2b$10$XkE5SqNURzT0sFkmYH7Et.s5jjYELLaAjNZ8pWEeneXsnxgMrCKfS', NULL, '2007-05-11', 'male', NULL, NULL, '', '[]', 1, 0),
(47, 'token teste', 'afmsnmaldito@hotmail.com', '$2b$10$prKPRI2wa0kv.ZOKd0NFGO.NAceRBGtxORI74eqajrFOah92buFg.', NULL, '2007-05-10', 'Male', NULL, NULL, '', '[]', 1, 1),
(49, 'PORRA', 'porraloveswipe@gmail.com', '', 'Teste oficial', '2007-05-10', 'male', 'Antwerp', 'null', 'https://static01.nyt.com/images/2016/09/28/us/17xp-pepethefrog_web1/28xp-pepefrog-superJumbo.jpg', '[\"https://static01.nyt.com/images/2016/09/28/us/17xp-pepethefrog_web1/28xp-pepefrog-superJumbo.jpg\",\"https://cdn.cdnstep.com/96PteJn7zvMxj8V1BtpU/0.webp\"]', 1, 1),
(50, 'teste preferencia', 'testepreferencia@gmail.com', '$2b$10$bIGPVeKcSkkUAsrkaA5i8Ocz3ra21M11VtgbDeJyDru8a11qrW/ui', NULL, '1957-06-22', 'male', NULL, '[\"gaming\"]', '', '[]', 0, 0),
(51, 'Heisenberg', 'heisenberg@gmail.com', '$2b$10$AzZvZOYVE2TY17JzEq5Nau2.irR63bZGbyOUS1yqGbgVAyAaYGcSW', 'I am the danger.', '1968-06-20', 'male', 'Alburquerque', '[\"not meth\",\"cooking\"]', 'https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Walter_White_S5B.png/250px-Walter_White_S5B.png', '[\"https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Walter_White_S5B.png/250px-Walter_White_S5B.png\"]', 0, 0),
(52, 'Hermione', 'hermione@gmail.com', '$2b$10$kZfGaRsha6eyF1WHD2Cd/uCkJcImULpliuhQ9LdzV0jMHKSASKWRi', 'Vingardum Leviosa.', '1998-06-19', 'female', 'Hogwarts', '[\"casting spells\"]', 'https://contentful.harrypotter.com/usf1vwtuqyxm/4tNCXEveHBZWp1AgccZg52/39c30ab4bc67842362b78ca5ab8e0eef/HP-F4-goblet-of-fire-hermione-great-hall-smiling-book-web-landscape?w=1200&fit=fill&f=top', '[\"https://contentful.harrypotter.com/usf1vwtuqyxm/4tNCXEveHBZWp1AgccZg52/39c30ab4bc67842362b78ca5ab8e0eef/HP-F4-goblet-of-fire-hermione-great-hall-smiling-book-web-landscape?w=1200&fit=fill&f=top\"]', 0, 0),
(53, 'Daenerys', 'daenerys@gmail.com', '$2b$10$AUyRELPLZ/3eJ2YQhjo.Su7qLwy8VR.W7yGz4xGR3IdZPH7joDzaW', 'Dracarys.', '1989-06-17', 'female', 'Westeros', '[\"burning\"]', 'https://hips.hearstapps.com/hmg-prod/images/screen-shot-2019-04-01-at-1-46-55-pm-1554141170.png?crop=0.549xw:1.00xh;0.347xw,0&resize=640:*', '[\"https://hips.hearstapps.com/hmg-prod/images/screen-shot-2019-04-01-at-1-46-55-pm-1554141170.png?crop=0.549xw:1.00xh;0.347xw,0&resize=640:*\"]', 0, 0),
(54, 'Jon Snow', 'jonsnow@gmail.com', '$2b$10$xH/223mLt6ZGCeRzp7pUmue0w3/N3XwQew6PH09w1EGYx.Entz.be', 'The nightwatch.', '1986-11-09', 'male', 'Beyond the wall', '[\"watching\"]', 'https://upload.wikimedia.org/wikipedia/en/3/30/Jon_Snow_Season_8.png', '[\"https://upload.wikimedia.org/wikipedia/en/3/30/Jon_Snow_Season_8.png\"]', 0, 0),
(55, 'Saul Goodman', 'saulgoodman@gmail.com', '$2b$10$ctjO121cmSnIRfjSdQ8Cle6l1uq/GSG/y9YYsP9xaMmfTsvhoXwsy', 'Better Call Saul!', '1975-02-07', 'male', 'Albuquerque', '[\"defending\"]', 'https://images.theconversation.com/files/479051/original/file-20220814-34367-qta4ii.jpg?ixlib=rb-4.1.0&rect=0%2C34%2C5640%2C2816&q=45&auto=format&w=1356&h=668&fit=crop', '[\"https://images.theconversation.com/files/479051/original/file-20220814-34367-qta4ii.jpg?ixlib=rb-4.1.0&rect=0%2C34%2C5640%2C2816&q=45&auto=format&w=1356&h=668&fit=crop\"]', 0, 0),
(56, 'Trump', 'trump@gmail.com', '$2b$10$fWZ6BM.PTIFDHT.1kTRjauGHzy5EnuW4GMPwQmEPjcij5KrxKpyQy', 'Make America Great Again', '1959-12-26', 'male', 'USA', '[\"tariffs\"]', 'https://images.vrt.be/vrtnws_web/2025/05/24/f6e7e102-9e4a-4ab4-89a2-9b3dec8fc631.jpg?width=900&height=506', '[\"https://images.vrt.be/vrtnws_web/2025/05/24/f6e7e102-9e4a-4ab4-89a2-9b3dec8fc631.jpg?width=900&height=506\"]', 0, 0),
(57, 'Geralt', 'geralt@gmail.com', '$2b$10$S9w64RBmFaDiXuv5OGqVaesx9vEHP77hL7fR9Oo1ZkgsG1ZqP2tnu', NULL, '1900-10-22', 'male', 'Rivia', '[\"killing\"]', 'https://assetsio.gnwcdn.com/geralt-of-rivia-a-disabled-protagonist-1606232827944.jpg?width=1200&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp', '[\"https://assetsio.gnwcdn.com/geralt-of-rivia-a-disabled-protagonist-1606232827944.jpg?width=1200&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp\"]', 0, 0),
(58, 'Wednesday Adams', 'wednesday@gmail.com', '$2b$10$r/Qpe6d4gZAnQp8ZrZiagenmfzZWZfLCNfbKzSdF7GeTbOK5d7U2O', NULL, '2002-06-07', 'female', 'Mechelen', 'null', 'https://images.hln.be/ZjA4MTUyNGNlYzkyODQ2MTAwMWEvZGlvLzIyNDQxNjMzNS9maWxsLzEyMDAvOTAw/wednesday-addams', '[\"https://images.hln.be/ZjA4MTUyNGNlYzkyODQ2MTAwMWEvZGlvLzIyNDQxNjMzNS9maWxsLzEyMDAvOTAw/wednesday-addams\"]', 0, 0),
(59, 'Dua Lipa', 'dualipa@gmail.com', '$2b$10$JgkSNRug.6Z8A6PHo1yoke/W9PHefK6A8laUkvsZdbbl27.d0g9ny', NULL, '1995-10-28', 'female', 'Antwerp', '[\"singing\"]', 'https://hips.hearstapps.com/hmg-prod/images/dua-lipa-is-seen-backstage-at-the-2024-rock-roll-hall-of-news-photo-1738345557.pjpeg?crop=1xw:0.57544xh;center,top&resize=1200:*', '[\"https://hips.hearstapps.com/hmg-prod/images/dua-lipa-is-seen-backstage-at-the-2024-rock-roll-hall-of-news-photo-1738345557.pjpeg?crop=1xw:0.57544xh;center,top&resize=1200:*\"]', 0, 0),
(60, 'Taylor Swift', 'taylorswift@gmail.com', '$2b$10$E/3WtIhzfwCVWiPYTu7ov.Y6E7mKWPNZtkJ9NxsJkGG9ybmVpx/aC', NULL, '1989-08-24', 'female', 'Brussels', '[\"singing\"]', 'https://s.yimg.com/ny/api/res/1.2/fZdWeFpWmDeUG554icw4qw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyNDI7aD04Mjg-/https://media.zenfs.com/en/men_s_journal_718/e5e27b981a63b93faf122e0b0777ff0c', '[\"https://s.yimg.com/ny/api/res/1.2/fZdWeFpWmDeUG554icw4qw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyNDI7aD04Mjg-/https://media.zenfs.com/en/men_s_journal_718/e5e27b981a63b93faf122e0b0777ff0c\"]', 0, 0),
(61, 'Cristiano Ronaldo', 'cristiano@gmail.com', '$2b$10$e1RRnbCMyrLlA/Yr9PQ1jerjiWRF4RAJapXUXqDIxeokHhOvUURVW', NULL, '1983-11-19', 'male', 'Mechelen', '[\"football\"]', 'https://s.hs-data.com/bilder/spieler/gross/13029.jpg', '[\"https://s.hs-data.com/bilder/spieler/gross/13029.jpg\"]', 0, 0),
(62, 'Messi', 'messi@gmail.com', '$2b$10$7c5DRFcLi6TGfNx8a1mWveicYDWDepF9e5e6N.PX1WpHh042/1JE.', NULL, '1986-08-23', 'male', 'Ghent', '[\"football\"]', 'https://c.files.bbci.co.uk/5c38/live/16192430-f5ef-11ef-bd6e-cd71c2e1454a.jpg', '[\"https://c.files.bbci.co.uk/5c38/live/16192430-f5ef-11ef-bd6e-cd71c2e1454a.jpg\"]', 0, 0),
(63, 'Furiosa', 'furiosa@gmail.com', '$2b$10$LsYYj3279/o4dAkHQVtBZuEOR3ha0EzY6VoOXIpHH9ZTFQaGJ0nIa', NULL, '1987-07-19', 'female', 'Antwerp', '[\"driving\"]', 'https://static01.nyt.com/images/2024/05/31/multimedia/furiosa-anatomy2-lzcq/furiosa-anatomy2-lzcq-square640-v3.jpg', '[\"https://static01.nyt.com/images/2024/05/31/multimedia/furiosa-anatomy2-lzcq/furiosa-anatomy2-lzcq-square640-v3.jpg\"]', 0, 0),
(64, 'Mad Max', 'madmax@gmail.com', '$2b$10$bRsTxOrHMdbEmVeVEBzqTelkNjrWkB4IRlc0Itr8e/dN04cBQiw6K', NULL, '1980-07-28', 'male', 'Brussels', '[\"driving\"]', 'https://cdn.mos.cms.futurecdn.net/5CaGhcwHctLAdgagshW9s.jpg', '[\"https://cdn.mos.cms.futurecdn.net/5CaGhcwHctLAdgagshW9s.jpg\"]', 0, 0),
(65, 'Gandalf', 'gandalf@gmail.com', '$2b$10$99u.d3MFLJg4DjJAwH5MHubZa.AUJHZGz/2pUbVTU80rMSW09srRm', NULL, '2006-02-20', 'male', NULL, 'null', 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/Gandalf600ppx.jpg/250px-Gandalf600ppx.jpg', '[\"https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/Gandalf600ppx.jpg/250px-Gandalf600ppx.jpg\"]', 0, 0),
(66, 'John Wick', 'johnwick@gmail.com', '$2b$10$YN/K9/yMoQdshTdSuegl7utYn7uvHAWKudBe4qwEhs7JXZ8HZrxAC', NULL, '1974-08-23', 'male', 'Mechelen', '[\"killing\"]', 'https://variety.com/wp-content/uploads/2023/03/John-Wick-3.jpg?w=1000&h=562&crop=1', '[\"https://variety.com/wp-content/uploads/2023/03/John-Wick-3.jpg?w=1000&h=562&crop=1\"]', 0, 0),
(67, 'Deadpool', 'deadpool@gmail.com', '$2b$10$swACWcOyfX21lt79vumCYe5dOfCVJqiF2aJWyqD2cbCz1VEWQ.YLK', NULL, '1986-09-18', 'male', 'Mechelen', '[\"killing\"]', 'https://sm.ign.com/t/ign_nl/video/d/deadpool-w/deadpool-wolverine-official-final-trailer_de2x.1200.png', '[\"https://sm.ign.com/t/ign_nl/video/d/deadpool-w/deadpool-wolverine-official-final-trailer_de2x.1200.png\"]', 0, 0),
(68, 'Wonder Woman', 'wonderwoman@gmail.com', '$2b$10$L6tz8VldpymlmTUFRuPo4eP6.aDO14MUjYJBMqPlpCLgNqMXnc7pO', NULL, '1994-07-16', 'female', 'Antwerp', 'null', 'https://m.media-amazon.com/images/M/MV5BZWVhYzE0NzgtM2U1Yi00OWM1LWJlZTUtZmNkNWZhM2VkMDczXkEyXkFqcGdeQW1yb3NzZXI@._V1_.jpg', '[\"https://m.media-amazon.com/images/M/MV5BZWVhYzE0NzgtM2U1Yi00OWM1LWJlZTUtZmNkNWZhM2VkMDczXkEyXkFqcGdeQW1yb3NzZXI@._V1_.jpg\"]', 0, 0),
(69, 'Magneto', 'magneto@gmail.com', '$2b$10$OufOPi9rZ61VKSR1WRhbzuxkBhiLvgoVyYl3rcIV0WI4D7UwNQYKG', NULL, '1900-12-20', 'male', 'Brussels', 'null', 'https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/ethrwtgxeaee_y3.jpg', '[\"https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/ethrwtgxeaee_y3.jpg\"]', 0, 0),
(70, 'Spider Man (not Peter Park)', 'spiderman@gmail.com', '$2b$10$tKfilOwyahGP78PbKxcw0.lBE535Zb2xATq88PxQGLdINwpfJTRbi', NULL, '2007-05-31', 'male', 'Ghent', 'null', 'https://img.etimg.com/thumb/width-420,height-315,imgsize-38950,resizemode-75,msid-107732661/news/international/us/spider-man-4-check-out-latest-updates-on-release-date-cast-plot-production-and-more.jpg', '[\"https://img.etimg.com/thumb/width-420,height-315,imgsize-38950,resizemode-75,msid-107732661/news/international/us/spider-man-4-check-out-latest-updates-on-release-date-cast-plot-production-and-more.jpg\"]', 0, 0),
(71, 'Invisible Woman', 'invisiblewoman@gmail.com', '$2b$10$bpsdfcvna3f9UIL0ocQlR.yyW2g7h4ZVWOsxhQQIDrNOmELwgvIIG', NULL, '1992-07-11', 'female', 'Mechelen', 'null', 'https://s.yimg.com/ny/api/res/1.2/XbgQGQXWN.JkTGeT1NR0QQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://media.zenfs.com/en/cinemablend_388/4c4ac1df7e8c7788a615bae4bf6e9288', '[\"https://s.yimg.com/ny/api/res/1.2/XbgQGQXWN.JkTGeT1NR0QQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://media.zenfs.com/en/cinemablend_388/4c4ac1df7e8c7788a615bae4bf6e9288\"]', 0, 0),
(72, 'Elon Musk', 'elonmusk@gmail.com', '$2b$10$Y1WNOgpGm9vbxmSCfB.FXOwUmnIUxM0/xWeIQh3kar7jTx6X.J/kq', NULL, '1953-07-18', 'male', 'USA', 'null', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/The_White_House_-_54409525537_%28cropped%29.jpg/250px-The_White_House_-_54409525537_%28cropped%29.jpg', '[\"https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/The_White_House_-_54409525537_%28cropped%29.jpg/250px-The_White_House_-_54409525537_%28cropped%29.jpg\"]', 0, 0),
(73, 'Grimes', 'grimes@gmail.com', '$2b$10$uTWxgoSd82Nvup2zLdDu2eOk1XrRnPxLxYfe/zsajjmh49agzUp92', NULL, '1984-12-22', 'female', 'Mechelen', '[\"singing\"]', 'https://cdn-images.dzcdn.net/images/artist/8a207720e8bed18bab25883fba019dc7/1900x1900-000000-80-0-0.jpg', '[\"https://cdn-images.dzcdn.net/images/artist/8a207720e8bed18bab25883fba019dc7/1900x1900-000000-80-0-0.jpg\"]', 0, 0),
(74, 'G Eazy', 'geazy@gmail.com', '$2b$10$kRiIVA9KXPegBHt74R6QWe6zHe/lo3jwbllHToFf.AtFRzG9QEsi2', NULL, '2002-10-12', 'male', 'Antwerp', '[\"singing\"]', 'https://cdn-p.smehost.net/sites/005297e5d91d4996984e966fac4389ea/wp-content/uploads/2019/10/30311ded2aa378d2c4ad67909493fdfe.jpg', '[\"https://cdn-p.smehost.net/sites/005297e5d91d4996984e966fac4389ea/wp-content/uploads/2019/10/30311ded2aa378d2c4ad67909493fdfe.jpg\"]', 0, 0),
(75, 'Billie Eilish', 'billieeilish@gmail.com', '$2b$10$NhkiWkONqGm2riTovk/vAeshJBp.2/J5.780lXOKtf45kmcyksJd6', NULL, '1991-10-18', 'female', 'Ghent', '[\"singing\"]', 'https://image.demorgen.be/165196324/feature-crop/1200/1200/billie-eilish-ging-naar-huis-met-beeldjes-voor-alle-belangrijke', '[\"https://image.demorgen.be/165196324/feature-crop/1200/1200/billie-eilish-ging-naar-huis-met-beeldjes-voor-alle-belangrijke\"]', 0, 0),
(76, 'Sabrina Carpenter', 'sabrinacarpenter@gmail.com', '$2b$10$sFQ/0LXaNReeL1zpsjTGC.HBLK7X/vOC/JFJLRMNNbuKw4FLLaK3W', NULL, '1995-07-21', 'female', 'Brussels', '[\"singing\"]', 'https://cdn-images.dzcdn.net/images/artist/e94f06a0e50a8b1a3032064d1552027c/1900x1900-000000-80-0-0.jpg', '[\"https://cdn-images.dzcdn.net/images/artist/e94f06a0e50a8b1a3032064d1552027c/1900x1900-000000-80-0-0.jpg\"]', 0, 0),
(77, 'Patrick Mahomes', 'mahomes@gmail.com', '$2b$10$hJ0k9PQJ2dwQs5BNCUl/.e0kz3kFQK6gPVZbmvS5JqZBQXSKmoEvW', NULL, '1993-10-16', 'male', 'Brussels', '[\"football\"]', 'https://static.toiimg.com/thumb/msid-121544330,imgsize-49548,width-400,resizemode-4/121544330.jpg', '[\"https://static.toiimg.com/thumb/msid-121544330,imgsize-49548,width-400,resizemode-4/121544330.jpg\"]', 0, 0),
(78, 'Lebron James', 'lebronjames@gmail.com', '$2b$10$4mQXsvkGGlHGMu.augxkzurJrlJ7fLRzHIxrIiLmxIAbc8x9/XOMK', NULL, '1976-12-16', 'male', 'Ghent', '[\"basketball\"]', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/LeBron_James_%2815662939969%29.jpg/250px-LeBron_James_%2815662939969%29.jpg', '[\"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/LeBron_James_%2815662939969%29.jpg/250px-LeBron_James_%2815662939969%29.jpg\"]', 0, 0),
(79, 'Kevin de Bruyne', 'debruyne@gmail.com', '$2b$10$CgatKBbEt5ZHBDcgIEkifeG1X8x9zRDcpues5fb1Xsg.AfXQBMUlK', NULL, '1990-07-27', 'male', 'Antwerp', '[\"football\"]', 'https://ichef.bbci.co.uk/ace/standard/919/cpsprodpb/9917/live/cfa82650-2b35-11f0-b292-fd6559a197f5.jpg', '[\"https://ichef.bbci.co.uk/ace/standard/919/cpsprodpb/9917/live/cfa82650-2b35-11f0-b292-fd6559a197f5.jpg\"]', 0, 0),
(80, 'Haaland', 'haaland@gmail.com', '$2b$10$UN/l8SRFidEXgI/RKzbcsO/VrfrSkuHI3TzBzwulBA4sYW2etB6Oe', NULL, '1994-07-21', 'male', 'Brussels', '[\"football\"]', 'https://images.hln.be/ZWU1MWY2YTk2MjViYmRiMGE4NWUvZGlvLzIzMDU5ODg1NC9maXQtd2lkdGgvNjk0', '[\"https://images.hln.be/ZWU1MWY2YTk2MjViYmRiMGE4NWUvZGlvLzIzMDU5ODg1NC9maXQtd2lkdGgvNjk0\"]', 0, 0),
(81, 'Vinicius Jr', 'vinijr@gmail.com', '$2b$10$uQ5X1NHHU.SZsNg9MmkfbeQS0Ngit4CZqZTg1p/JIm7VxroVdaRgK', NULL, '1995-10-13', 'male', 'Brazil', '[\"football\"]', 'https://tmssl.akamaized.net/images/foto/galerie/vinicius-junior-real-madrid-2024-2025-1728562846-150927.jpg', '[\"https://tmssl.akamaized.net/images/foto/galerie/vinicius-junior-real-madrid-2024-2025-1728562846-150927.jpg\"]', 0, 0),
(82, 'Hayley Williams', 'hayleywilliams@gmail.com', '$2b$10$sR1/GnSxRqnqHN3mTPFpO.MyFRdG3ODQ5uSAt1kmt5Tl44nA0KiVK', NULL, '1987-07-24', 'female', 'Mechelen', '[\"singing\"]', 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Hayley_Williams_at_Royal_Albert_Hall_-_19th_June_2017_-_09_%28cropped%29.jpg', '[\"https://upload.wikimedia.org/wikipedia/commons/e/e0/Hayley_Williams_at_Royal_Albert_Hall_-_19th_June_2017_-_09_%28cropped%29.jpg\"]', 0, 0),
(83, 'Alex Pereira', 'poatan@gmail.com', '$2b$10$voX05yXewyuuj0xJi59V/OB/4krMO649tM3kbR4IT4Sl.jZGQ.TOa', NULL, '1989-10-14', 'male', 'Brazil', '[\"fighting\"]', 'https://ufc.com/images/styles/inline/s3/2024-06/GettyImages-1788804691.jpg?itok=SKILm7c6', '[\"https://ufc.com/images/styles/inline/s3/2024-06/GettyImages-1788804691.jpg?itok=SKILm7c6\"]', 0, 0),
(84, 'Khabib Nurmagomedov', 'khabib@gmail.com', '$2b$10$LfcWWlt/AJCR8bXwsa1gmOwTSPJiT0mdIlTjsPMUeHGaNiTA3lVbS', NULL, '1992-12-13', 'male', 'Brussels', '[\"fighting\"]', 'https://blogs.rdxsports.com/wp-content/uploads/2022/08/1282040210.jpg.0.jpg', '[\"https://blogs.rdxsports.com/wp-content/uploads/2022/08/1282040210.jpg.0.jpg\"]', 0, 0),
(85, 'Pope Leo', 'popeleo@gmail.com', '$2b$10$aONnmpP6S8AeTwVDWUk8Tepo7iWPf3pg93.Ex.MfucpoU5m6CD1Xi', NULL, '1950-07-20', 'male', 'Vatican', '[\"praying\"]', 'https://dwightlongenecker.com/wp-content/uploads/2025/05/OIF.psXEREn3K2Cqmb9uFbqdFw.jpeg', '[\"https://dwightlongenecker.com/wp-content/uploads/2025/05/OIF.psXEREn3K2Cqmb9uFbqdFw.jpeg\"]', 0, 0),
(86, 'Mark Zuckerberg', 'zuckerberg@gmail.com', '$2b$10$illwFg/2WiKO.ZuQGiTJu.6cpXc9EFs4wM.lcT18EJZP5pFwfyYZW', NULL, '1983-06-22', 'male', 'Mechelen', '[\"coding\"]', 'https://image.cnbcfm.com/api/v1/image/108043097-1727989387071-gettyimages-2173579179-META_CONNECT.jpeg?v=1744292077&w=800&h=600&ffmt=webp', '[\"https://image.cnbcfm.com/api/v1/image/108043097-1727989387071-gettyimages-2173579179-META_CONNECT.jpeg?v=1744292077&w=800&h=600&ffmt=webp\"]', 0, 0),
(87, 'Margot Robbie', 'margot@gmail.com', '$2b$10$VHg7tXkklYN6LU8wJ9V80ufoGUgmQ09X3mn4fEr4NJKaqo0iaV8re', NULL, '1988-10-14', 'female', 'Brussels', '[\"acting\"]', 'https://hips.hearstapps.com/hmg-prod/images/margot-robbie-attends-the-96th-annual-academy-awards-on-news-photo-1730705182.jpg?crop=1xw:0.50024xh;center,top&resize=1200:*', '[\"https://hips.hearstapps.com/hmg-prod/images/margot-robbie-attends-the-96th-annual-academy-awards-on-news-photo-1730705182.jpg?crop=1xw:0.50024xh;center,top&resize=1200:*\"]', 0, 0),
(88, 'Scarlett Johansson', 'scarlett@gmail.com', '$2b$10$jFnQ1Yx/MSHIW9UYEzHK1O6tbCCaUlx.3FBI85VMtV76cGW2M2Bba', NULL, '1991-08-09', 'female', 'Ghent', '[\"acting\"]', 'https://images.hln.be/OGI0NDU3Y2JkN2E3MjMwNzgwMzEvZGlvLzIyOTQ2MDQ3OC9maXQtd2lkdGgvNjk0/scarlett-johansson', '[\"https://images.hln.be/OGI0NDU3Y2JkN2E3MjMwNzgwMzEvZGlvLzIyOTQ2MDQ3OC9maXQtd2lkdGgvNjk0/scarlett-johansson\"]', 0, 0),
(89, 'Olivia Rodrigo', 'olivia@gmail.com', '$2b$10$0U5IyYhLluykhTSklMhIxun/GoiiY.LbZWkk05cVicPqD5dKKc5xC', NULL, '1996-12-13', 'female', 'Antwerp', '[\"singing\"]', 'https://images.nu.nl/m/03ix3l4acss8_wd854/0/112/3598/2024/olivia-rodrigo.jpg', '[\"https://images.nu.nl/m/03ix3l4acss8_wd854/0/112/3598/2024/olivia-rodrigo.jpg\"]', 0, 0),
(90, 'Melanie Martinez', 'melanie@gmail.com', '$2b$10$ZYYVdh7u8Erkpk/Ad9v0kOZitBOma6OTdf5gfTvWT7maAcxqmsDOa', NULL, '1991-04-13', 'female', 'Mechelen', '[\"singing\"]', 'https://imageio.forbes.com/specials-images/imageserve/5fb94c36a6f930f53e64c8dd/0x0.jpg?format=jpg&crop=1080,1080,x0,y0,safe&height=416&width=416&fit=bounds', '[\"https://imageio.forbes.com/specials-images/imageserve/5fb94c36a6f930f53e64c8dd/0x0.jpg?format=jpg&crop=1080,1080,x0,y0,safe&height=416&width=416&fit=bounds\"]', 0, 0),
(91, 'John Doe', 'quanari555@gmail.com', '', 'Testing oauth', '2007-05-31', 'male', NULL, 'null', 'https://lh3.googleusercontent.com/a/ACg8ocKHdgBjhJxEZfPEdeuW6VNV5P_saKgl--WZhZBS1-5K7ML-QQ=s96-c', '[]', 1, 0),
(92, 'Rose', 'rose@gmail.com', '$2b$10$DpRiwxyErLRRQ7YBTLxsbeYlJzwKrwIu0K0AwKiw4DbkqWT39SJtC', NULL, '1991-05-16', 'female', 'Brussels', '[\"singing\"]', 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Blackpink_Ros%C3%A9_Rimowa_1.jpg', '[\"https://upload.wikimedia.org/wikipedia/commons/b/b3/Blackpink_Ros%C3%A9_Rimowa_1.jpg\"]', 0, 0),
(94, 'Vladimir Putin', 'putin@gmail.com', '$2b$10$L3e8mJ/0OIFpsP8ICjl2eufm76c4gKYEFX57uCMx3QuSS.YRLck.C', NULL, '1969-02-05', 'male', 'Moscow', '[\"war\"]', 'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/rockcms/2025-06/250603-putin-mb-1229-8778ee.jpg', '[\"https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/rockcms/2025-06/250603-putin-mb-1229-8778ee.jpg\"]', 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `userpreferences`
--

CREATE TABLE `userpreferences` (
  `id` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `preferredGender` varchar(10) DEFAULT NULL,
  `preferredLocation` varchar(100) DEFAULT NULL,
  `minAge` int(11) DEFAULT NULL,
  `maxAge` int(11) DEFAULT NULL,
  `preferredInterests` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `userpreferences`
--

INSERT INTO `userpreferences` (`id`, `userId`, `preferredGender`, `preferredLocation`, `minAge`, `maxAge`, `preferredInterests`) VALUES
(2, 11, 'Male', '', NULL, NULL, NULL),
(7, 46, 'Female', NULL, NULL, NULL, NULL),
(8, 50, NULL, NULL, NULL, NULL, 'gaming'),
(10, 49, 'male', NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `verificationtoken`
--

CREATE TABLE `verificationtoken` (
  `id` int(11) NOT NULL,
  `token` varchar(255) NOT NULL,
  `userId` int(11) NOT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `expiresAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `verificationtoken`
--

INSERT INTO `verificationtoken` (`id`, `token`, `userId`, `createdAt`, `expiresAt`) VALUES
(13, 'c53a6b1c-d670-4c79-aa8a-24d05f6039a3', 50, '2025-05-21 17:21:48', '2025-05-21 18:21:48'),
(14, '91500cd3-779a-4f41-b951-a86dc1c72129', 51, '2025-06-02 18:26:37', '2025-06-02 19:26:37'),
(15, 'a26becfd-7e35-423a-a50d-b01ccde7eab9', 52, '2025-06-02 18:29:01', '2025-06-02 19:29:01'),
(16, '47377fd2-9d82-419f-b1b9-7200e0ad431b', 53, '2025-06-02 18:31:20', '2025-06-02 19:31:20'),
(17, 'b7d4ec55-3729-4257-88a7-5a1d21214b8c', 54, '2025-06-02 18:33:37', '2025-06-02 19:33:37'),
(18, '8b463731-fb9b-4aeb-be29-cc5d6b24eeca', 55, '2025-06-02 18:35:21', '2025-06-02 19:35:21'),
(19, '9b56c098-a961-4c7f-b608-b4643f526f93', 56, '2025-06-02 18:37:47', '2025-06-02 19:37:47'),
(20, '8a9a7268-fe14-4a3b-95e4-e2d12a14fcfe', 57, '2025-06-02 18:43:55', '2025-06-02 19:43:55'),
(21, 'ba5335d4-c0aa-4338-bb4f-c82b9c38b515', 58, '2025-06-02 18:45:51', '2025-06-02 19:45:51'),
(22, '612ed581-817b-4fdc-bf86-17ef54cb5a28', 59, '2025-06-02 18:53:04', '2025-06-02 19:53:04'),
(23, '88aeb6cb-015e-44c7-a490-adaa816d8bd9', 60, '2025-06-02 18:54:27', '2025-06-02 19:54:27'),
(24, '29db948b-d428-4d8a-9896-18e193fd09f0', 61, '2025-06-02 18:55:51', '2025-06-02 19:55:51'),
(25, '14263fbe-a860-4235-9233-e0b808a30237', 62, '2025-06-02 18:57:51', '2025-06-02 19:57:51'),
(26, 'a932c0be-4b3f-4541-902c-4f28e7e4d0a6', 63, '2025-06-02 19:00:29', '2025-06-02 20:00:29'),
(27, 'b9128fa6-9dea-4d39-a077-2864224f406a', 64, '2025-06-02 19:01:19', '2025-06-02 20:01:19'),
(28, '427b4c1b-c6dc-4745-8aaf-73a4aac5c557', 65, '2025-06-02 19:03:13', '2025-06-02 20:03:13'),
(29, '3c8a207d-095a-49e1-b9f9-f005c6b6fea6', 66, '2025-06-02 19:05:29', '2025-06-02 20:05:29'),
(30, 'ba6a484d-9347-4c46-a08f-59391caf3aae', 67, '2025-06-02 19:11:06', '2025-06-02 20:11:06'),
(31, '4cb16167-8875-4e88-a797-c7a9771501f1', 68, '2025-06-02 19:12:53', '2025-06-02 20:12:53'),
(32, '944b3d86-5b61-4a4b-922b-11cf08c68ca3', 69, '2025-06-02 19:15:29', '2025-06-02 20:15:29'),
(33, '40198225-1d13-4a92-a9f9-bf4d7f88262d', 70, '2025-06-02 19:17:38', '2025-06-02 20:17:38'),
(34, 'bb5f5cbd-aa9d-4f78-9619-33a41c778acc', 71, '2025-06-02 19:19:47', '2025-06-02 20:19:47'),
(35, 'b71b8ca6-9302-4d59-a43e-26b94709853f', 72, '2025-06-02 19:21:54', '2025-06-02 20:21:54'),
(36, 'c2c1e4cc-50ef-4017-b502-8090129cc036', 73, '2025-06-02 19:23:45', '2025-06-02 20:23:45'),
(37, '30dd2fa4-d66a-49ef-9472-aee785f755c2', 74, '2025-06-02 19:24:54', '2025-06-02 20:24:54'),
(38, '72a295e4-663b-4f62-8937-8c48aeeac9e3', 75, '2025-06-02 19:29:44', '2025-06-02 20:29:44'),
(39, 'dcc484b3-aba8-4749-92c7-4a13b6104d7a', 76, '2025-06-02 19:31:12', '2025-06-02 20:31:12'),
(40, 'e436db2b-784f-4db9-a82d-649c5a530299', 77, '2025-06-02 19:34:14', '2025-06-02 20:34:14'),
(41, '790905ed-2578-49e1-aa9c-b2f58bb03685', 78, '2025-06-02 19:35:56', '2025-06-02 20:35:56'),
(42, '6a49b48f-da0d-42fa-85df-18da28c8bbdc', 79, '2025-06-02 19:38:38', '2025-06-02 20:38:38'),
(43, 'ee9d9cdf-5e95-4224-9f46-330e60b5cd30', 80, '2025-06-02 19:39:49', '2025-06-02 20:39:49'),
(44, 'fcfe3a4c-3f4a-426f-8265-1b3a33d85e71', 81, '2025-06-02 19:41:09', '2025-06-02 20:41:09'),
(45, 'a43b84c0-57b4-4d7c-afd2-c13034f6614e', 82, '2025-06-02 19:43:22', '2025-06-02 20:43:22'),
(46, 'dae07f9c-ffd8-4845-93c1-ada12d42cd7f', 83, '2025-06-02 19:45:25', '2025-06-02 20:45:25'),
(47, 'cea87bdd-87da-47c2-8c9e-95ed99cb8e6f', 84, '2025-06-02 19:46:38', '2025-06-02 20:46:38'),
(48, 'c2b8c8f9-7061-4bba-b0ce-7bf478f0e21c', 85, '2025-06-10 18:23:35', '2025-06-10 19:23:35'),
(49, 'ffcc525d-473f-4ca7-9c76-59a9c5715708', 86, '2025-06-10 18:25:36', '2025-06-10 19:25:36'),
(50, '93e86c6f-4c73-4ded-ae91-427bd0b07eab', 87, '2025-06-10 18:28:22', '2025-06-10 19:28:22'),
(51, '37ec5a91-6504-4bfd-b2e5-e539858d9c9e', 88, '2025-06-10 18:30:25', '2025-06-10 19:30:25'),
(52, 'b61a70fc-b40f-479d-b6d7-a1d4021b7b51', 89, '2025-06-10 18:33:05', '2025-06-10 19:33:05'),
(53, '8fc652a0-5e1a-4458-83f7-9babf3372aa2', 90, '2025-06-10 18:35:57', '2025-06-10 19:35:57'),
(54, 'b4cfa75c-4640-4d6d-9e76-88052d6cd000', 92, '2025-06-10 18:40:37', '2025-06-10 19:40:37'),
(56, 'b5ed352c-4b14-47e1-b6aa-4bd1067125e6', 94, '2025-06-10 18:45:33', '2025-06-10 19:45:33');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `admin_email` (`email`);

--
-- Indexes for table `block`
--
ALTER TABLE `block`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unique_block_pair` (`blockerId`,`blockedId`),
  ADD KEY `fk_block_blocked` (`blockedId`);

--
-- Indexes for table `matches`
--
ALTER TABLE `matches`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user1Id` (`user1Id`),
  ADD KEY `user2Id` (`user2Id`);

--
-- Indexes for table `message`
--
ALTER TABLE `message`
  ADD PRIMARY KEY (`id`),
  ADD KEY `senderId` (`senderId`),
  ADD KEY `receiverId` (`receiverId`);

--
-- Indexes for table `passwordresettoken`
--
ALTER TABLE `passwordresettoken`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `token` (`token`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user_email` (`email`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `userpreferences`
--
ALTER TABLE `userpreferences`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `userId` (`userId`);

--
-- Indexes for table `verificationtoken`
--
ALTER TABLE `verificationtoken`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `token` (`token`),
  ADD KEY `userId` (`userId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `block`
--
ALTER TABLE `block`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `matches`
--
ALTER TABLE `matches`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=201;

--
-- AUTO_INCREMENT for table `message`
--
ALTER TABLE `message`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `passwordresettoken`
--
ALTER TABLE `passwordresettoken`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=95;

--
-- AUTO_INCREMENT for table `userpreferences`
--
ALTER TABLE `userpreferences`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `verificationtoken`
--
ALTER TABLE `verificationtoken`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `block`
--
ALTER TABLE `block`
  ADD CONSTRAINT `fk_block_blocked` FOREIGN KEY (`blockedId`) REFERENCES `user` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `fk_block_blocker` FOREIGN KEY (`blockerId`) REFERENCES `user` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `matches`
--
ALTER TABLE `matches`
  ADD CONSTRAINT `matches_ibfk_1` FOREIGN KEY (`user1Id`) REFERENCES `user` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `matches_ibfk_2` FOREIGN KEY (`user2Id`) REFERENCES `user` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `message`
--
ALTER TABLE `message`
  ADD CONSTRAINT `message_ibfk_1` FOREIGN KEY (`senderId`) REFERENCES `user` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `message_ibfk_2` FOREIGN KEY (`receiverId`) REFERENCES `user` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `passwordresettoken`
--
ALTER TABLE `passwordresettoken`
  ADD CONSTRAINT `passwordresettoken_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `userpreferences`
--
ALTER TABLE `userpreferences`
  ADD CONSTRAINT `userpreferences_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `verificationtoken`
--
ALTER TABLE `verificationtoken`
  ADD CONSTRAINT `verificationtoken_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
