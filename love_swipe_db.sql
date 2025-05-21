-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 21, 2025 at 09:50 PM
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

--
-- Dumping data for table `block`
--

INSERT INTO `block` (`id`, `blockerId`, `blockedId`, `createdAt`) VALUES
(3, 47, 10, '2025-05-20 17:02:06'),
(5, 9, 18, '2025-05-20 17:25:10');

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
(16, 14, 9, 1, '2025-04-30 05:36:18'),
(17, 14, 10, 1, '2025-04-30 05:36:19'),
(18, 14, 11, 0, '2025-04-30 05:36:23'),
(19, 14, 12, 0, '2025-04-30 05:36:26'),
(21, 14, 15, 1, '2025-04-30 05:36:28'),
(22, 15, 9, 1, '2025-04-30 05:36:49'),
(23, 15, 10, 1, '2025-04-30 05:36:50'),
(24, 15, 11, 0, '2025-04-30 05:36:51'),
(25, 15, 12, 0, '2025-04-30 05:36:52'),
(27, 16, 9, 1, '2025-05-02 05:13:16'),
(28, 16, 10, 1, '2025-05-02 05:13:17'),
(29, 16, 11, 0, '2025-05-02 05:13:20'),
(30, 16, 12, 0, '2025-05-02 05:13:21'),
(32, 16, 14, 0, '2025-05-02 05:13:23'),
(33, 16, 15, 1, '2025-05-02 05:13:24'),
(34, 16, 17, 1, '2025-05-02 05:13:25'),
(35, 17, 9, 1, '2025-05-02 05:13:45'),
(36, 17, 10, 1, '2025-05-02 05:13:45'),
(37, 17, 11, 0, '2025-05-02 05:13:47'),
(38, 17, 12, 0, '2025-05-02 05:13:48'),
(40, 17, 14, 0, '2025-05-02 05:13:49'),
(41, 17, 15, 1, '2025-05-02 05:13:49'),
(42, 17, 16, 1, '2025-05-02 05:13:50'),
(43, 10, 9, 1, '2025-05-02 05:45:46'),
(44, 10, 11, 0, '2025-05-02 05:45:48'),
(45, 10, 12, 0, '2025-05-02 05:45:50'),
(47, 10, 14, 1, '2025-05-02 05:45:51'),
(48, 10, 15, 1, '2025-05-02 05:45:51'),
(49, 10, 16, 1, '2025-05-02 05:45:52'),
(50, 10, 17, 1, '2025-05-02 05:45:53'),
(51, 9, 10, 1, '2025-05-03 07:28:07'),
(52, 9, 11, 0, '2025-05-03 07:28:08'),
(53, 9, 12, 0, '2025-05-03 07:28:09'),
(54, 9, 14, 1, '2025-05-03 07:28:09'),
(55, 9, 15, 1, '2025-05-03 07:28:10'),
(56, 9, 16, 1, '2025-05-03 07:28:11'),
(57, 9, 17, 1, '2025-05-03 07:28:11'),
(58, 15, 14, 1, '2025-05-03 07:46:08'),
(59, 15, 16, 1, '2025-05-03 07:46:10'),
(60, 15, 17, 1, '2025-05-03 07:46:11'),
(61, 12, 11, 0, '2025-05-03 07:50:34'),
(62, 18, 11, 0, '2025-05-03 07:51:18'),
(63, 18, 14, 0, '2025-05-03 07:51:19'),
(64, 18, 12, 0, '2025-05-03 07:51:21'),
(65, 18, 16, 1, '2025-05-03 07:51:22'),
(66, 18, 10, 1, '2025-05-03 07:51:23'),
(67, 18, 17, 0, '2025-05-03 07:51:24'),
(68, 18, 9, 0, '2025-05-03 07:51:25'),
(69, 18, 15, 0, '2025-05-03 07:51:26'),
(70, 19, 14, 0, '2025-05-03 07:58:43'),
(71, 19, 12, 0, '2025-05-03 07:58:44'),
(72, 19, 10, 1, '2025-05-03 07:58:45'),
(73, 19, 15, 0, '2025-05-03 07:58:46'),
(74, 19, 11, 0, '2025-05-03 07:58:49'),
(75, 19, 9, 1, '2025-05-03 07:58:51'),
(76, 19, 18, 1, '2025-05-03 07:58:52'),
(77, 19, 17, 0, '2025-05-03 07:58:53'),
(78, 19, 16, 0, '2025-05-03 07:58:53'),
(96, 10, 21, 0, '2025-05-13 11:59:47'),
(97, 10, 21, 0, '2025-05-13 12:45:32'),
(99, 9, 21, 0, '2025-05-13 12:45:55'),
(101, 18, 21, 0, '2025-05-13 13:10:27'),
(103, 18, 19, 1, '2025-05-13 13:10:34'),
(104, 10, 19, 1, '2025-05-13 13:13:12'),
(106, 10, 18, 1, '2025-05-13 13:13:16'),
(108, 41, 12, 0, '2025-05-13 13:30:29'),
(109, 41, 19, 0, '2025-05-13 13:30:30'),
(110, 41, 11, 0, '2025-05-13 13:30:32'),
(111, 41, 17, 0, '2025-05-13 13:30:32'),
(112, 41, 9, 1, '2025-05-13 13:30:34'),
(113, 41, 18, 0, '2025-05-13 13:30:35'),
(115, 41, 14, 0, '2025-05-13 13:30:42'),
(116, 41, 10, 1, '2025-05-13 13:38:27'),
(118, 10, 41, 1, '2025-05-14 08:57:11'),
(119, 42, 17, 0, '2025-05-14 09:31:11'),
(120, 42, 41, 0, '2025-05-14 09:31:13'),
(122, 42, 19, 0, '2025-05-14 09:31:18'),
(123, 42, 16, 0, '2025-05-14 09:33:28'),
(125, 42, 14, 0, '2025-05-14 09:47:06'),
(126, 42, 9, 1, '2025-05-14 09:47:08'),
(127, 42, 18, 0, '2025-05-14 09:53:14'),
(128, 42, 11, 0, '2025-05-14 09:59:22'),
(129, 43, 10, 1, '2025-05-14 10:12:59'),
(130, 43, 12, 0, '2025-05-14 10:13:02'),
(131, 43, 11, 0, '2025-05-14 10:13:03'),
(132, 46, 11, 0, '2025-05-16 11:06:47'),
(133, 46, 41, 0, '2025-05-16 11:06:49'),
(134, 46, 10, 1, '2025-05-16 11:06:50'),
(135, 47, 11, 0, '2025-05-16 11:17:15'),
(136, 47, 43, 0, '2025-05-16 11:17:23'),
(137, 47, 18, 0, '2025-05-16 11:17:26'),
(138, 47, 10, 1, '2025-05-16 11:17:27'),
(139, 47, 15, 0, '2025-05-16 11:17:29'),
(140, 47, 17, 0, '2025-05-16 11:17:30'),
(141, 47, 44, 0, '2025-05-16 11:17:31'),
(142, 47, 12, 0, '2025-05-16 11:17:32'),
(143, 47, 42, 0, '2025-05-16 11:17:34'),
(144, 47, 9, 1, '2025-05-16 11:17:35'),
(145, 10, 16, 1, '2025-05-16 11:52:51'),
(146, 10, 43, 1, '2025-05-16 11:52:54'),
(147, 10, 44, 0, '2025-05-16 11:53:01'),
(148, 10, 47, 1, '2025-05-16 11:53:03'),
(149, 10, 42, 0, '2025-05-16 11:53:06'),
(150, 10, 46, 1, '2025-05-16 11:53:07'),
(151, 10, 46, 1, '2025-05-16 13:22:41'),
(152, 9, 42, 1, '2025-05-20 15:28:44'),
(153, 9, 41, 1, '2025-05-20 15:28:52'),
(154, 9, 48, 0, '2025-05-20 15:28:59'),
(155, 9, 43, 0, '2025-05-20 15:29:01'),
(156, 9, 49, 0, '2025-05-20 15:29:02'),
(157, 9, 47, 1, '2025-05-20 15:29:03'),
(158, 9, 44, 0, '2025-05-20 15:29:09'),
(159, 9, 46, 0, '2025-05-20 15:29:24'),
(160, 9, 19, 1, '2025-05-20 15:30:37'),
(161, 49, 46, 0, '2025-05-20 15:39:59'),
(162, 49, 42, 0, '2025-05-20 15:40:01'),
(163, 49, 12, 0, '2025-05-20 15:40:03'),
(164, 49, 47, 0, '2025-05-20 15:40:03'),
(165, 49, 11, 0, '2025-05-20 15:40:04'),
(166, 49, 17, 0, '2025-05-20 15:40:05'),
(167, 49, 14, 0, '2025-05-20 15:40:06'),
(168, 49, 15, 0, '2025-05-20 15:40:07'),
(169, 49, 18, 0, '2025-05-20 15:40:08'),
(170, 49, 10, 0, '2025-05-20 15:40:10'),
(171, 49, 21, 0, '2025-05-20 16:56:53'),
(172, 49, 44, 0, '2025-05-20 16:56:58'),
(173, 49, 48, 0, '2025-05-20 16:56:59'),
(174, 49, 19, 0, '2025-05-20 17:00:29'),
(175, 49, 43, 0, '2025-05-20 17:00:32'),
(176, 49, 9, 0, '2025-05-20 17:00:36'),
(177, 49, 16, 0, '2025-05-20 17:00:38'),
(178, 49, 41, 0, '2025-05-20 17:00:40'),
(179, 16, 47, 0, '2025-05-20 17:09:54'),
(180, 16, 48, 0, '2025-05-20 17:09:56'),
(181, 16, 18, 1, '2025-05-20 17:09:57'),
(182, 16, 19, 0, '2025-05-20 17:10:01'),
(183, 16, 46, 0, '2025-05-20 17:10:02'),
(184, 16, 42, 0, '2025-05-20 17:10:03'),
(185, 16, 41, 0, '2025-05-20 17:10:04'),
(186, 16, 21, 0, '2025-05-20 17:10:06'),
(187, 16, 43, 0, '2025-05-20 17:10:07'),
(188, 16, 44, 0, '2025-05-20 17:10:08'),
(189, 50, 48, 0, '2025-05-21 16:30:34'),
(190, 50, 49, 0, '2025-05-21 17:31:20'),
(191, 50, 11, 0, '2025-05-21 17:34:46'),
(192, 50, 16, 0, '2025-05-21 17:34:47'),
(193, 50, 14, 0, '2025-05-21 17:34:49'),
(194, 50, 10, 0, '2025-05-21 17:37:34'),
(195, 50, 42, 0, '2025-05-21 17:37:36'),
(196, 50, 9, 0, '2025-05-21 17:46:52');

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

--
-- Dumping data for table `message`
--

INSERT INTO `message` (`id`, `senderId`, `receiverId`, `content`, `createdAt`) VALUES
(2, 17, 16, 'hello', '2025-05-02 07:44:24'),
(3, 17, 16, 'how are you?', '2025-05-02 07:44:31'),
(4, 16, 17, 'im doing great thanks', '2025-05-02 07:45:12'),
(5, 10, 16, 'teste', '2025-05-02 07:46:20'),
(6, 17, 10, 'as', '2025-05-02 08:37:34'),
(7, 17, 10, 'teste', '2025-05-02 09:33:40'),
(8, 17, 10, 'ola', '2025-05-02 09:33:47'),
(9, 10, 17, 'teste agora', '2025-05-02 09:39:50'),
(10, 10, 17, 'teste', '2025-05-02 09:43:03'),
(11, 10, 17, ':)', '2025-05-02 09:43:34'),
(12, 10, 17, 'teste', '2025-05-02 09:50:42'),
(13, 17, 10, 'opa', '2025-05-02 09:51:05'),
(14, 17, 10, 'agora ta funcionando', '2025-05-02 09:51:12'),
(15, 10, 17, 'teste', '2025-05-02 09:51:39'),
(16, 9, 10, 'hello', '2025-05-03 09:28:21'),
(17, 9, 10, 'teste', '2025-05-08 13:51:41'),
(18, 10, 9, 'ola', '2025-05-11 14:33:09'),
(19, 10, 9, 'teste', '2025-05-13 14:29:43'),
(23, 9, 10, 'linda', '2025-05-16 14:56:35'),
(24, 9, 10, 'delicia', '2025-05-16 14:56:36'),
(25, 17, 9, 'hello', '2025-05-16 16:17:50'),
(26, 17, 10, 'teste', '2025-05-19 23:38:04'),
(27, 17, 10, 'what', '2025-05-19 23:38:11'),
(28, 17, 10, 'eu', '2025-05-19 23:41:31'),
(29, 17, 10, 'teste', '2025-05-19 23:41:33'),
(30, 10, 17, 'eu sou a mulher', '2025-05-19 23:42:17'),
(31, 47, 10, 'linda', '2025-05-20 16:59:53'),
(32, 9, 17, 'ei', '2025-05-20 17:09:08');

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
  `interests` varchar(255) DEFAULT NULL,
  `profilePicture` text DEFAULT NULL,
  `profilePictures` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`profilePictures`)),
  `verified` tinyint(1) DEFAULT 0,
  `isPremium` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `email`, `password`, `bio`, `birth`, `gender`, `location`, `interests`, `profilePicture`, `profilePictures`, `verified`, `isPremium`) VALUES
(9, 'novo homem', 'homem@gmail.com', '$2b$10$EHXQzqZ4RBb90oW6f6UeK.OCiXSZtN6V0K7GD0O56qsnggk9LDumS', 'light brotherhood', '2007-06-13', 'male', 'Magic box', 'killing', 'https://eu-support.konami.com/hc/article_attachments/25993239599127', NULL, 0, 0),
(10, 'mulher', 'mulher@gmail.com', '$2b$10$GTplbXVCRsReGIba.JM.F.LX9aXaBA97TTbCLlTZad46F8JTcpfpq', 'natyiba', '2001-06-14', 'female', 'Andromeda', 'killing', 'https://cdn.dlcompare.com/others_jpg/upload/news/image/stellar-blade-zostal-wydany-z-do-b67c4ba7-image-422794b8b.jpg.webp', '[\"https://cdn.dlcompare.com/others_jpg/upload/news/image/stellar-blade-zostal-wydany-z-do-b67c4ba7-image-422794b8b.jpg.webp\",\"https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/04/eve-holding-an-alpha-core-in-stellar-blade.jpg\",\"https://stellarblade.wiki.fextralife.com/file/Stellar-Blade/2-eve-stellar-blade-wiki-guide-1920px.jpg\",\"https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/25415535/SB_Demo_PR_Roll_Screenshots_Prologue_06.jpg?quality=90&strip=all&crop=21.875,0,56.25,100\",\"https://static1.thegamerimages.com/wordpress/wp-content/uploads/2024/02/eve-from-stellar-blade.jpg\"]', 0, 1),
(11, 'chelsea', 'chelsea@gmail.com', '$2b$10$./qVEqCfAFL6rvBHPPjkuOVk8WH3/EpXMxwOM1JiGhY7isFD9ZFmG', NULL, '2000-05-25', 'male', NULL, NULL, 'https://thumbs.dreamstime.com/b/chelsea-f-c-87278714.jpg', NULL, 0, 0),
(12, 'chelsea1', 'chelsea1@gmail.com', '$2b$10$8OUxWYozCpkrvOulhudRYOsIT0j8yZdGmzYgpFO39vMbeMyHGTV/K', NULL, '2004-06-24', 'male', NULL, NULL, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMYMJ_86ctK0IoiS2WOYcZslFE08V0WLQgoA&s', NULL, 0, 0),
(14, 'soad', 'soad@gmail.com', '$2b$10$MoB7nnPLUVrovOdFZsk/QuJHjI5.Qg9tTxZ8siJ9N3x5Q/59yDna.', NULL, '2007-04-04', 'male', NULL, NULL, '', NULL, 0, 0),
(15, 'lp', 'lp@gmail.com', '$2b$10$IqnidtZTHySwYtF.76wa0.muB0gXJuwleXql1FnzXDUcQYYxldAzW', NULL, '2007-04-28', 'male', NULL, NULL, 'https://seeklogo.com/images/L/linkin-park-logo-423D2A8866-seeklogo.com.png', '[\"https://seeklogo.com/images/L/linkin-park-logo-423D2A8866-seeklogo.com.png\"]', 0, 0),
(16, 'bolsonaro', 'boslonaro@gmail.com', '$2b$10$Ye8t49GxQ2NJqtlEbqZVg.pm6mSe/w6EVM.aTQOApTGIm/Fp8vE7S', NULL, '2007-03-08', 'male', NULL, NULL, '', NULL, 0, 0),
(17, 'lula', 'lula@gmail.com', '$2b$10$WvhUXnWN8cNQwsCpG.7SX.KcfXxjVTL6KCVU9jRY2FiAgffMhIvQO', NULL, '2007-02-15', 'male', NULL, NULL, '', NULL, 0, 0),
(18, 'random', 'random@gmail.com', '$2b$10$0Xt4kCfN2o55gbO21gJ5wuBLNzzbZ/3LTOMTsuF/fX3WUW7orTW8K', NULL, '2007-05-03', 'male', NULL, NULL, '', NULL, 0, 0),
(19, 'random1', 'random1@gmail.com', '$2b$10$FWhn9rCTjCOtjWCVi55x8.aw9fX5nthsSeeMhnxw7yl0Vkrhbddw.', NULL, '2007-05-02', 'male', NULL, NULL, '', NULL, 0, 0),
(21, 'verificar', 'verifcar@gmail.com', '$2b$10$6v3JHOCuDmhh8HsZCCFG5eH5pN4IOivcK3Eg3CGeKp/AZ0zJWo1ba', NULL, '2007-04-30', 'male', NULL, NULL, NULL, NULL, 0, 0),
(41, 'xandao', 'super@gmail.com', '$2b$10$dH0LwG02MO347TzRYItVZuueIoEN40.n/RQQ7DAaLte13uoaR0bPK', NULL, '2007-05-02', 'female', NULL, NULL, '', '[]', 0, 0),
(42, 'preference', 'preference@gmail.com', '$2b$10$mZy/wGo6ymgUaXXC1oBCROJ4o0trO3VAoB3CdtSsk5eh9StslKQfe', NULL, '2007-05-12', 'male', NULL, NULL, '', '[]', 0, 0),
(43, 'vk', 'victorkratos@gmail.com', '$2b$10$flH98cfF3jqGpZ3f.RD6Ium/FTddpleEcqX9ib7MbXehg2vAewmGC', NULL, '2007-05-03', 'Male', NULL, NULL, '', '[]', 0, 0),
(44, 'teste oficial', 'swipetestweb@gmail.com', '$2b$10$9n3FR9onhA.A7usoDO5gtekAkZNu1C1754fHR6KDpGLBKO2Ww2ar2', NULL, '2007-05-10', 'Male', NULL, NULL, '', '[]', 0, 0),
(46, 'teste oficial', 'testeoficial818@gmail.com', '$2b$10$XkE5SqNURzT0sFkmYH7Et.s5jjYELLaAjNZ8pWEeneXsnxgMrCKfS', NULL, '2007-05-11', 'male', NULL, NULL, '', '[]', 1, 0),
(47, 'token teste', 'afmsnmaldito@hotmail.com', '$2b$10$prKPRI2wa0kv.ZOKd0NFGO.NAceRBGtxORI74eqajrFOah92buFg.', NULL, '2007-05-10', 'Male', NULL, NULL, '', '[]', 1, 1),
(48, 'kevin', 'kevin@gmail.com', '$2b$10$c6d1gJtPincCltzy9lPXLutePc5Nh1glaJeLX/tXVtkOVrdbI.Wwi', NULL, '2005-06-17', 'male', NULL, NULL, '', '[]', 0, 0),
(49, 'PORRA', 'porraloveswipe@gmail.com', '', 'Teste oficial', '2007-05-10', 'male', 'Antwerp', 'eating, sleeping', 'https://i.pinimg.com/474x/fb/c3/6d/fbc36d17c4e8ccc9e2653e6a02d41a10.jpg', '[]', 1, 1),
(50, 'teste preferencia', 'testepreferencia@gmail.com', '$2b$10$bIGPVeKcSkkUAsrkaA5i8Ocz3ra21M11VtgbDeJyDru8a11qrW/ui', NULL, '1957-06-22', 'male', NULL, NULL, '', '[]', 0, 0);

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
  `maxAge` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `userpreferences`
--

INSERT INTO `userpreferences` (`id`, `userId`, `preferredGender`, `preferredLocation`, `minAge`, `maxAge`) VALUES
(1, 10, 'Male', 'Antwerp', NULL, NULL),
(2, 11, 'Male', '', NULL, NULL),
(3, 12, 'Female', '', NULL, NULL),
(5, 42, 'Female', NULL, NULL, NULL),
(6, 43, 'Male', NULL, NULL, 20),
(7, 46, 'Female', NULL, NULL, NULL),
(8, 50, NULL, 'Bruges', 18, NULL);

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
(12, 'ae14898f-0986-4c16-9765-e639f1e52472', 48, '2025-05-20 00:42:57', '2025-05-20 01:42:57'),
(13, 'c53a6b1c-d670-4c79-aa8a-24d05f6039a3', 50, '2025-05-21 17:21:48', '2025-05-21 18:21:48');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=197;

--
-- AUTO_INCREMENT for table `message`
--
ALTER TABLE `message`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `passwordresettoken`
--
ALTER TABLE `passwordresettoken`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT for table `userpreferences`
--
ALTER TABLE `userpreferences`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `verificationtoken`
--
ALTER TABLE `verificationtoken`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

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
