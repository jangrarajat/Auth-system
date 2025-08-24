const express = require('express')
const router = express.Router();
const ensureAuthenticated = require('../Middlewares/Auth')



router.get('/', ensureAuthenticated, (req, res) => {
    res.status(200).json(

        [
            {
                "id": 1,
                "name": "Paneer",
                "serving": "100 g",
                "calories": 265,
                "protein_g": 18,
                "carbs_g": 6,
                "fat_g": 20,
                "image": "https://images.unsplash.com/photo-1622227920093-4d28a741b93a?auto=format&fit=crop&w=600&q=80"
            },
            {
                "id": 2,
                "name": "Moong Dal (Boiled)",
                "serving": "1 bowl (150 g)",
                "calories": 120,
                "protein_g": 8,
                "carbs_g": 20,
                "fat_g": 0.5,
                "image": "https://images.unsplash.com/photo-1604909052743-d3d1c8a7762d?auto=format&fit=crop&w=600&q=80"
            },
            {
                "id": 3,
                "name": "Soya Chunks (Cooked)",
                "serving": "100 g",
                "calories": 170,
                "protein_g": 17,
                "carbs_g": 15,
                "fat_g": 6,
                "image": "https://images.unsplash.com/photo-1617196039887-5b9cba69e66d?auto=format&fit=crop&w=600&q=80"
            },
            {
                "id": 4,
                "name": "Rajma (Kidney Beans)",
                "serving": "1 cup (150 g)",
                "calories": 210,
                "protein_g": 15,
                "carbs_g": 38,
                "fat_g": 1.5,
                "image": "https://images.unsplash.com/photo-1625217527287-d86956b6c93f?auto=format&fit=crop&w=600&q=80"
            },
            {
                "id": 5,
                "name": "Chole (Chickpeas Curry)",
                "serving": "1 cup (150 g)",
                "calories": 230,
                "protein_g": 12,
                "carbs_g": 35,
                "fat_g": 7,
                "image": "https://images.unsplash.com/photo-1589308078052-9185d4b8cf8b?auto=format&fit=crop&w=600&q=80"
            },
            {
                "id": 6,
                "name": "Aloo (Boiled Potato)",
                "serving": "1 medium (150 g)",
                "calories": 110,
                "protein_g": 2.5,
                "carbs_g": 26,
                "fat_g": 0.1,
                "image": "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&w=600&q=80"
            },
            {
                "id": 7,
                "name": "Palak (Spinach Curry)",
                "serving": "1 cup (120 g)",
                "calories": 60,
                "protein_g": 4,
                "carbs_g": 7,
                "fat_g": 2,
                "image": "https://images.unsplash.com/photo-1623061337117-0a73e7ac24f7?auto=format&fit=crop&w=600&q=80"
            },
            {
                "id": 8,
                "name": "Mix Veg Curry",
                "serving": "1 cup (150 g)",
                "calories": 95,
                "protein_g": 4,
                "carbs_g": 15,
                "fat_g": 3,
                "image": "https://images.unsplash.com/photo-1604908177453-907f3f0f2c86?auto=format&fit=crop&w=600&q=80"
            },
            {
                "id": 9,
                "name": "Baingan Bharta",
                "serving": "1 cup (150 g)",
                "calories": 140,
                "protein_g": 5,
                "carbs_g": 20,
                "fat_g": 7,
                "image": "https://images.unsplash.com/photo-1626082926160-69c6008ad13e?auto=format&fit=crop&w=600&q=80"
            },
            {
                "id": 10,
                "name": "Matar Paneer",
                "serving": "1 cup (150 g)",
                "calories": 220,
                "protein_g": 12,
                "carbs_g": 18,
                "fat_g": 12,
                "image": "https://images.unsplash.com/photo-1612929633738-8f0a14de3d42?auto=format&fit=crop&w=600&q=80"
            }
            ,
            {
                "id": 11,
                "name": "Bhindi Masala",
                "serving": "1 cup (150 g)",
                "calories": 120,
                "protein_g": 4,
                "carbs_g": 14,
                "fat_g": 6,
                "image": "https://images.unsplash.com/photo-1626082925810-7e5d73e9cf4c?auto=format&fit=crop&w=600&q=80"
            },
            {
                "id": 12,
                "name": "Paneer Butter Masala",
                "serving": "1 cup (150 g)",
                "calories": 290,
                "protein_g": 14,
                "carbs_g": 16,
                "fat_g": 20,
                "image": "https://images.unsplash.com/photo-1617196039877-1f3b95f8a8d9?auto=format&fit=crop&w=600&q=80"
            },
            {
                "id": 13,
                "name": "Dal Tadka",
                "serving": "1 cup (150 g)",
                "calories": 180,
                "protein_g": 9,
                "carbs_g": 25,
                "fat_g": 5,
                "image": "https://images.unsplash.com/photo-1617196039881-95e8a6436a3c?auto=format&fit=crop&w=600&q=80"
            },
            {
                "id": 14,
                "name": "Vegetable Pulao",
                "serving": "1 plate (200 g)",
                "calories": 240,
                "protein_g": 6,
                "carbs_g": 42,
                "fat_g": 6,
                "image": "https://images.unsplash.com/photo-1606788075761-6631388e95bb?auto=format&fit=crop&w=600&q=80"
            },
            {
                "id": 15,
                "name": "Khichdi",
                "serving": "1 bowl (200 g)",
                "calories": 210,
                "protein_g": 8,
                "carbs_g": 38,
                "fat_g": 4,
                "image": "https://images.unsplash.com/photo-1632059547048-f85e2b855fa6?auto=format&fit=crop&w=600&q=80"
            },
            {
                "id": 16,
                "name": "Idli Sambhar",
                "serving": "2 pcs + sambhar (200 g)",
                "calories": 190,
                "protein_g": 7,
                "carbs_g": 34,
                "fat_g": 4,
                "image": "https://images.unsplash.com/photo-1648459550587-cc79cba42c6b?auto=format&fit=crop&w=600&q=80"
            },
            {
                "id": 17,
                "name": "Dosa with Chutney",
                "serving": "1 dosa (120 g)",
                "calories": 160,
                "protein_g": 4,
                "carbs_g": 30,
                "fat_g": 4,
                "image": "https://images.unsplash.com/photo-1648913656783-61619479f5d7?auto=format&fit=crop&w=600&q=80"
            },
            {
                "id": 18,
                "name": "Uttapam",
                "serving": "1 pc (150 g)",
                "calories": 180,
                "protein_g": 5,
                "carbs_g": 32,
                "fat_g": 4,
                "image": "https://images.unsplash.com/photo-1632059508521-f6c1db2d2f98?auto=format&fit=crop&w=600&q=80"
            },
            {
                "id": 19,
                "name": "Vegetable Sandwich",
                "serving": "2 slices (150 g)",
                "calories": 210,
                "protein_g": 7,
                "carbs_g": 30,
                "fat_g": 7,
                "image": "https://images.unsplash.com/photo-1567234669003-dce7a7a88895?auto=format&fit=crop&w=600&q=80"
            },
            {
                "id": 20,
                "name": "Poha",
                "serving": "1 plate (150 g)",
                "calories": 180,
                "protein_g": 5,
                "carbs_g": 32,
                "fat_g": 5,
                "image": "https://images.unsplash.com/photo-1668236545069-d53e5f7c3db8?auto=format&fit=crop&w=600&q=80"
            }

            ,
            {
                "id": 21,
                "name": "Upma",
                "serving": "1 bowl (150 g)",
                "calories": 200,
                "protein_g": 6,
                "carbs_g": 32,
                "fat_g": 6,
                "image": "https://images.unsplash.com/photo-1632059499061-482ca392d36e?auto=format&fit=crop&w=600&q=80"
            },
            {
                "id": 22,
                "name": "Veg Hakka Noodles",
                "serving": "1 plate (200 g)",
                "calories": 280,
                "protein_g": 7,
                "carbs_g": 48,
                "fat_g": 8,
                "image": "https://images.unsplash.com/photo-1625944230941-f4aa4d3867dd?auto=format&fit=crop&w=600&q=80"
            },
            {
                "id": 23,
                "name": "Spring Rolls",
                "serving": "2 pcs (120 g)",
                "calories": 150,
                "protein_g": 4,
                "carbs_g": 22,
                "fat_g": 5,
                "image": "https://images.unsplash.com/photo-1601050690597-df4cb924b0bb?auto=format&fit=crop&w=600&q=80"
            },
            {
                "id": 24,
                "name": "Veg Momos",
                "serving": "6 pcs (150 g)",
                "calories": 220,
                "protein_g": 6,
                "carbs_g": 32,
                "fat_g": 6,
                "image": "https://images.unsplash.com/photo-1632059495833-bfcf32c0a918?auto=format&fit=crop&w=600&q=80"
            },
            {
                "id": 25,
                "name": "Aloo Paratha",
                "serving": "1 pc (100 g)",
                "calories": 210,
                "protein_g": 5,
                "carbs_g": 32,
                "fat_g": 8,
                "image": "https://images.unsplash.com/photo-1668236547074-7fa05afd995d?auto=format&fit=crop&w=600&q=80"
            },
            {
                "id": 26,
                "name": "Chole Bhature",
                "serving": "1 plate (250 g)",
                "calories": 450,
                "protein_g": 12,
                "carbs_g": 60,
                "fat_g": 18,
                "image": "https://images.unsplash.com/photo-1656430819777-daf0fbbdc77a?auto=format&fit=crop&w=600&q=80"
            },
            {
                "id": 27,
                "name": "Rajma Chawal",
                "serving": "1 plate (250 g)",
                "calories": 350,
                "protein_g": 14,
                "carbs_g": 60,
                "fat_g": 6,
                "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80"
            },
            {
                "id": 28,
                "name": "Pav Bhaji",
                "serving": "1 plate (200 g)",
                "calories": 400,
                "protein_g": 10,
                "carbs_g": 56,
                "fat_g": 14,
                "image": "https://images.unsplash.com/photo-1632059505656-7304990aecd4?auto=format&fit=crop&w=600&q=80"
            },
            {
                "id": 29,
                "name": "Vegetable Biryani",
                "serving": "1 plate (250 g)",
                "calories": 320,
                "protein_g": 8,
                "carbs_g": 55,
                "fat_g": 8,
                "image": "https://images.unsplash.com/photo-1598514982461-46b60c7a2bb8?auto=format&fit=crop&w=600&q=80"
            },
            {
                "id": 30,
                "name": "Kadhi Chawal",
                "serving": "1 plate (250 g)",
                "calories": 310,
                "protein_g": 9,
                "carbs_g": 52,
                "fat_g": 7,
                "image": "https://images.unsplash.com/photo-1632059525356-d29d0d3c6c49?auto=format&fit=crop&w=600&q=80"
            }

            ,
            {
                "id": 31,
                "name": "Vegetable Khichdi",
                "serving": "1 bowl (200 g)",
                "calories": 280,
                "protein_g": 9,
                "carbs_g": 48,
                "fat_g": 6,
                "image": "https://images.unsplash.com/photo-1655804684518-7fba0b1e593f?auto=format&fit=crop&w=600&q=80"
            },
            {
                "id": 32,
                "name": "Baingan Bharta",
                "serving": "1 bowl (150 g)",
                "calories": 180,
                "protein_g": 4,
                "carbs_g": 16,
                "fat_g": 10,
                "image": "https://images.unsplash.com/photo-1626082923285-fefb3c7a509a?auto=format&fit=crop&w=600&q=80"
            },
            {
                "id": 33,
                "name": "Matar Paneer",
                "serving": "1 bowl (180 g)",
                "calories": 320,
                "protein_g": 14,
                "carbs_g": 18,
                "fat_g": 20,
                "image": "https://images.unsplash.com/photo-1648986304877-88cc6fba9a33?auto=format&fit=crop&w=600&q=80"
            },
            {
                "id": 34,
                "name": "Palak Paneer",
                "serving": "1 bowl (180 g)",
                "calories": 290,
                "protein_g": 15,
                "carbs_g": 12,
                "fat_g": 18,
                "image": "https://images.unsplash.com/photo-1631452180519-9068f1d40c49?auto=format&fit=crop&w=600&q=80"
            },
            {
                "id": 35,
                "name": "Mix Veg Curry",
                "serving": "1 bowl (200 g)",
                "calories": 220,
                "protein_g": 7,
                "carbs_g": 22,
                "fat_g": 10,
                "image": "https://images.unsplash.com/photo-1646165262289-5f3f25f1e1a1?auto=format&fit=crop&w=600&q=80"
            },
            {
                "id": 36,
                "name": "Bhindi Masala",
                "serving": "1 bowl (150 g)",
                "calories": 190,
                "protein_g": 5,
                "carbs_g": 14,
                "fat_g": 12,
                "image": "https://images.unsplash.com/photo-1655804683936-2b13b8a1d73a?auto=format&fit=crop&w=600&q=80"
            },
            {
                "id": 37,
                "name": "Aloo Gobi",
                "serving": "1 bowl (180 g)",
                "calories": 210,
                "protein_g": 6,
                "carbs_g": 20,
                "fat_g": 11,
                "image": "https://images.unsplash.com/photo-1626082916139-b9f8f2bc5822?auto=format&fit=crop&w=600&q=80"
            },
            {
                "id": 38,
                "name": "Paneer Butter Masala",
                "serving": "1 bowl (200 g)",
                "calories": 360,
                "protein_g": 14,
                "carbs_g": 16,
                "fat_g": 26,
                "image": "https://images.unsplash.com/photo-1631452181196-ef32272acab8?auto=format&fit=crop&w=600&q=80"
            },
            {
                "id": 39,
                "name": "Mushroom Masala",
                "serving": "1 bowl (180 g)",
                "calories": 230,
                "protein_g": 8,
                "carbs_g": 14,
                "fat_g": 14,
                "image": "https://images.unsplash.com/photo-1626082915995-9f3bc57a97dc?auto=format&fit=crop&w=600&q=80"
            },
            {
                "id": 40,
                "name": "Vegetable Pulao",
                "serving": "1 plate (200 g)",
                "calories": 280,
                "protein_g": 6,
                "carbs_g": 50,
                "fat_g": 7,
                "image": "https://images.unsplash.com/photo-1626082916301-11ab39ac3907?auto=format&fit=crop&w=600&q=80"
            }
            ,
            {
                "id": 41,
                "name": "Paneer Pakora",
                "serving": "4 pieces (120 g)",
                "calories": 310,
                "protein_g": 12,
                "carbs_g": 18,
                "fat_g": 20,
                "image": "https://images.unsplash.com/photo-1631452181133-1dbd7f7d02b7?auto=format&fit=crop&w=600&q=80"
            },
            {
                "id": 42,
                "name": "Dhokla",
                "serving": "3 pieces (100 g)",
                "calories": 160,
                "protein_g": 6,
                "carbs_g": 22,
                "fat_g": 6,
                "image": "https://images.unsplash.com/photo-1626082916491-7a5b12f1cf9d?auto=format&fit=crop&w=600&q=80"
            },
            {
                "id": 43,
                "name": "Vegetable Soup",
                "serving": "1 bowl (200 ml)",
                "calories": 90,
                "protein_g": 3,
                "carbs_g": 12,
                "fat_g": 3,
                "image": "https://images.unsplash.com/photo-1604908176997-25d6d5cae6fe?auto=format&fit=crop&w=600&q=80"
            },
            {
                "id": 44,
                "name": "Hakka Noodles",
                "serving": "1 plate (220 g)",
                "calories": 320,
                "protein_g": 9,
                "carbs_g": 54,
                "fat_g": 8,
                "image": "https://images.unsplash.com/photo-1631452180526-4a0d7e67f43a?auto=format&fit=crop&w=600&q=80"
            },
            {
                "id": 45,
                "name": "Vegetable Dosa",
                "serving": "1 dosa (150 g)",
                "calories": 200,
                "protein_g": 6,
                "carbs_g": 32,
                "fat_g": 5,
                "image": "https://images.unsplash.com/photo-1655804684115-f3d5bbd2e646?auto=format&fit=crop&w=600&q=80"
            },
            {
                "id": 46,
                "name": "Vegetable Uttapam",
                "serving": "1 piece (180 g)",
                "calories": 240,
                "protein_g": 7,
                "carbs_g": 36,
                "fat_g": 7,
                "image": "https://images.unsplash.com/photo-1655804684091-f760bfcf4042?auto=format&fit=crop&w=600&q=80"
            },
            {
                "id": 47,
                "name": "Vegetable Idli",
                "serving": "3 idlis (150 g)",
                "calories": 210,
                "protein_g": 7,
                "carbs_g": 40,
                "fat_g": 3,
                "image": "https://images.unsplash.com/photo-1655804683821-53e1ebd01c02?auto=format&fit=crop&w=600&q=80"
            },
            {
                "id": 48,
                "name": "Chole Bhature",
                "serving": "1 plate (250 g)",
                "calories": 450,
                "protein_g": 14,
                "carbs_g": 56,
                "fat_g": 18,
                "image": "https://images.unsplash.com/photo-1655804683865-69eb88dfd9a4?auto=format&fit=crop&w=600&q=80"
            },
            {
                "id": 49,
                "name": "Veg Manchurian",
                "serving": "6 balls (200 g)",
                "calories": 310,
                "protein_g": 10,
                "carbs_g": 28,
                "fat_g": 16,
                "image": "https://images.unsplash.com/photo-1655804684466-fb17e92e3f79?auto=format&fit=crop&w=600&q=80"
            },
            {
                "id": 50,
                "name": "Paneer Tikka",
                "serving": "6 pieces (180 g)",
                "calories": 340,
                "protein_g": 18,
                "carbs_g": 12,
                "fat_g": 22,
                "image": "https://images.unsplash.com/photo-1655804683947-9089cb87222c?auto=format&fit=crop&w=600&q=80"
            }




        ]

    )
})


module.exports = router;