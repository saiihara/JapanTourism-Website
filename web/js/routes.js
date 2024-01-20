document.addEventListener('DOMContentLoaded', function() {

var days = document.querySelectorAll('.days');
var days2 = document.querySelectorAll('.days2');
var days3 = document.querySelectorAll('.days3');
var dayContents = {
    'day1': {
        text: [
            'Days 1-4',
            'Travel from Fukuoka to Takachiho by taking the JR Kyushu Shinkansen to Kumamoto (40-50 mins), then transferring to the JR Nippo Line to Nobeoka (2 hrs). From Nobeoka, a 2-hour bus ride will take you directly to Takachiho.',
            'Alternatively, rent a car in Fukuoka and drive south on the Kyushu Expressway, then switch to local roads, with the entire journey taking 3-5 hours depending on traffic',
            'Alternatively, for those preferring a more flexible schedule, renting a car in Fukuoka and driving south on the Kyushu Expressway towards Kumamoto, then continuing on local roads to Takachiho, is a viable option, with the entire road journey taking around 3-5 hours depending on traffic and road conditions'
        ],
        photo: 'url("./assets/photos/takachiko.jpg")'
    },
    'day2': {
        text: [
            'Days 4-7',
            'To travel from Hiroshima to Takamatsu, you have a few options. You can take a train from Hiroshima to Fukuyama, then another train to Kasaoka, walk to the Kasaoka ferry terminal, and then take a ferry to the Port of Takamatsu1. Alternatively, you can drive from Hiroshima to Takamatsu, which is approximately 191.6 kilometers via the San-yo Expressway',
            'From Takamatsu to Himeji, you can take a train from Takamatsu to Okayama, and then another train from Okayama to Himeji. The total distance is approximately 151.958 kilometers if you choose to drive via the San-yo Expressway',
            'Please note that these are just suggested routes and the actual travel time may vary depending on traffic conditions and the specific schedule of public transportation.'
        ],
        photo: 'url("./assets/photos/hiroshima.jpeg")'
    },
    'day3': {
        text: [
            'Days 7-9',
            'To travel from Osaka to Kyoto, you can take the JR Tokaido Shinkansen from Shin-Osaka Station to Kyoto Station. The journey takes about 15 minutes and costs around 1,450 yen. Alternatively, you can take the special rapid train on the JR Kyoto Line, which takes about 30 minutes and costs 580 yen',
            'From Kyoto to Nara, you can take the Miyakoji rapid trains that operate every 30 minutes between Kyoto Station and JR Nara Station. The one-way trip takes 45 minutes and costs 720 yen. Another option is to take the Kintetsu limited express train from Kyoto Station to Kintetsu Nara Station, which takes about 35 minutes and costs 1,280 yen',
        ],
        photo: 'url("./assets/photos/kyoto-min.jpg")'
    },
    'day4': {
        text: [
            'Days 9-14',
            'To travel from Koka to Tokyo, you can take a train from Koka to Kyoto, then transfer to the Shinkansen (bullet train) from Kyoto to Tokyo. The Shinkansen is a high-speed train service in Japan that can reach speeds of up to 320 km/h, making it a quick and efficient way to travel between cities.',
            'Alternatively, rent a car in Fukuoka and drive south on the Kyushu Expressway, then switch to local roads, with the entire journey taking 3-5 hours depending on traffic',
            'Tokyo, Japan’s vibrant capital, offers a mix of traditional and modern attractions. Visit the Imperial Palace and its beautiful gardens, or the historic Sensoji Temple in Asakusa. Explore the serene Meiji Shrine, dedicated to Emperor Meiji and his wife, or relax in the Shinjuku Gyoen National Garden. Don’t miss the panoramic city views from the Tokyo Skytree, Japan’s tallest structure. Enjoy your visit to this fascinating city! ',
        ],
        photo: 'url("./assets/photos/tokyo.jpg")'
    },
    'day5': {
        text: [
            'Days 1-3',
            'Embark on a 1-3 day journey from Hakodate to Tomakomai. Day one explores Hakodate with its Morning Market, Mount Hakodate Ropeway, and historic Motomachi district. Enjoy the renowned night view before relaxing in a Yunokawa Onsen. On day two, travel to Noboribetsu for Jigokudani and Noboribetsu Date Jidaimura. ',
            'Stay in Noboribetsu for onsen and dinner. On the final day, head to Tomakomai, visit the Tarumaezan Ropeway for scenic views, explore Tomakomai Port, and savor fresh seafood. Depart from Tomakomai or head to New Chitose Airport. Optimize travel with the Hokkaido Rail Pass, book accommodations in advance, and indulge in local specialties along the way.',
        ],
        photo: 'url("./assets/photos/hokkaidoflowers.jpg")'
    },
    'day6': {
        text: [
            'Days 3-5',
            'Sure, here’s a suggested route from Tomakomai to New Asahikawa. Start your journey in Tomakomai, a city known for its beautiful natural scenery and delicious seafood. From there, take a train to Sapporo, the capital of Hokkaido, where you can explore the city’s vibrant nightlife and famous snow festival.',
            'After spending a few days in Sapporo, continue your journey to Asahikawa, the second-largest city in Hokkaido. Known for its zoo and sake breweries, Asahikawa offers a variety of attractions for visitors.',
            'In Asahikawa, you can visit the Asahiyama Zoo, popular for its unique “action exhibition” where animals roam around in open areas12. You can also explore the Snow Museum, Ueno Farm, and the Takasago Shuzo Sake Distillery ',
        ],
        photo: 'url("./assets/photos/sapporo.jpg")'
    },
    'day7': {
        text: [
            'Days 5-8',
            'From Sapporo, you can take a train to Kamikawa. In Kamikawa, you can visit the Asahidake Ropeway for a majestic mountainside view, the Blue Pond for a tranquil day trip, and the Daisetsuzan National Park for a nature adventure',
            'Next, continue your journey to Kitami. In Kitami, you can visit the Wakka Genseikaen gardens, the Kitakitsune Farm zoo, and the Yama no Aquarium',
            'Finally, make your way to Shiretoko National Park, a UNESCO World Heritage Site known for its rich biodiversity, stunning landscapes, and the famous Shiretoko Five Lakes. You can also enjoy a boat cruise to view the park’s dramatic coastline. Remember to check the weather and park regulations before your visit. ',
        ],
        photo: 'url("./assets/photos/ShiretokoNationalPark.jpg")'
    },
    'day8': {
        text: [
            'Days 9-14',
           ' From Kushiro, you can take a train or bus to Nemuro12. The train journey takes about 2 hours and 43 minutes, and the bus journey takes about 2 hours and 33 minutes1',
            'In Kushiro, you can visit the Kushiro Marsh Observatory for a panoramic view of the Kushiro Wetland34, and the Onnenai Visitor Center to learn about the local flora and fauna',
            'Next, continue your journey to Nemuro, the easternmost city of Japan. Nemuro is famous for its fresh seafood, especially Hanasaki crab, and the Nosappumisaki Lighthouse, where you can witness the earliest sunrise in Japan. You can also visit the Nemuro Historical Museum to learn about the city’s history and culture.',
            'Finally, make your way back to Sapporo and enjoy the city’s vibrant nightlife, famous snow festival, and delicious local cuisine. Don’t forget to visit the Odori Park and the Maruyama Park for some relaxation before ending your trip.'
        ],
        photo: 'url("./assets/photos/wetlands.jpg")'
    },
    'day9': {
        text: [
            'Days 1-4',
           'Starting in Osaka, you can explore the city’s vibrant life, including the famous Osaka Castle and the bustling nightlife in Dotonbori. The next day, take a train to Nara, which is about an hour away. Spend your day visiting the Todai-ji Temple, home to the world’s largest bronze statue of Buddha, and Nara Park, where you can interact with friendly deer',
            'In the third day, head to Kyoto, a 45-minute train ride from Nara. Once in Kyoto, visit the beautiful Kinkaku-ji, also known as the Golden Pavilion. Spend the fourth day exploring more of Kyoto’s rich history and culture before concluding your trip.',
        ],
        photo: 'url("./assets/photos/osakasakura.jpg")'
    },
    'day10': {
        text: [
            'Days 4-7',
           'To travel from Kanazawa to Takayama, you can take the Nouhi Bus from Kanazawa Station to Takayama Nouhi Bus Terminal. The journey takes about 2 hours and 15 minutes. Alternatively, you can take a train from Kanazawa to Takayama via Toyama, which takes around 3 hours',
            'From Takayama to Mount Fuji, you have a couple of options. You can take a train from Takayama to Nagoya, and then another train from Nagoya to Shin-Fuji, which takes around 5 hours and 44 minutes2. Alternatively, you can take a bus from Takayama to Matsumoto Bus Terminal, and then take another bus from Matsumoto Bus Terminal to Chūōdō Hino, and finally a bus from Chuodo Hino to Fuji-Q Highland, which takes around 7 hours and 45 minutes',
        ],
        photo: 'url("./assets/photos/kanazawa.jpg")'
    },
    'day11': {
        text: [
            'Days 7-9',
           'Starting in Kanazawa, you can take the Nouhi Bus from Kanazawa Station to Takayama Nouhi Bus Terminal, which takes about 2 hours and 15 minutes. Alternatively, you can take a train from Kanazawa to Takayama via Toyama, which takes around 3 hours. From Takayama to Mount Fuji, you can take a train from Takayama to Nagoya, and then another train from Nagoya to Shin-Fuji, which takes around 5 hours and 44 minutes.',
            'Alternatively, you can take a bus from Takayama to Matsumoto Bus Terminal, and then take another bus from Matsumoto Bus Terminal to Chūōdō Hino, and finally a bus from Chuodo Hino to Fuji-Q Highland, which takes around 7 hours and 45 minutes. To travel from Hakone to Tokyo, you can drive via the Odawaraatsugi Road and Tomei EXPWY, which takes about 1 hour and 31 minutes.',
        ],
        photo: 'url("./assets/photos/sakuratokyo.jpg")'
    },
};

//1
for (var i = 0; i < days.length; i++) {
    days[i].addEventListener('click', function(event) {
        event.preventDefault();
        var dayId = this.id;

        var sliderContent = document.querySelector('.slider-content .slider-text');
        var sliderPhoto = document.querySelector('.slider-content .slider-photo');
        sliderContent.innerHTML = dayContents[dayId].text.map(paragraph => `<p style="margin-bottom: 10px;">${paragraph}</p>`).join('');
        sliderPhoto.style.backgroundImage = dayContents[dayId].photo;
    });
}

//2
for (var i = 0; i < days2.length; i++) {
    days2[i].addEventListener('click', function(event) {
        event.preventDefault();
        var dayId = this.id;

        var sliderContent = document.querySelector('.slider-2 .slider-content .slider-text');
        var sliderPhoto = document.querySelector('.slider-2 .slider-content .slider-photo');
        sliderContent.innerHTML = dayContents[dayId].text.map(paragraph => `<p style="margin-bottom: 10px;">${paragraph}</p>`).join('');
        sliderPhoto.style.backgroundImage = dayContents[dayId].photo;
    });
}

//3
for (var i = 0; i < days3.length; i++) {
    days3[i].addEventListener('click', function(event) {
        event.preventDefault();
        var dayId = this.id;

        var sliderContent = document.querySelector('.slider-3 .slider-content .slider-text');
        var sliderPhoto = document.querySelector('.slider-3 .slider-content .slider-photo');
        sliderContent.innerHTML = dayContents[dayId].text.map(paragraph => `<p style="margin-bottom: 10px;">${paragraph}</p>`).join('');
        sliderPhoto.style.backgroundImage = dayContents[dayId].photo;
    });
}

document.querySelector('#day1').click();
document.querySelector('#day5').click();
document.querySelector('#day9').click();

//MAKE MAPA BIGGER
var images = document.querySelectorAll('.map-photo-slider');
images.forEach(function(img) {
    img.addEventListener('click', function(e) {
        var modal = document.createElement('div');
        modal.style.position = 'fixed';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        modal.style.display = 'flex';
        modal.style.justifyContent = 'center';
        modal.style.alignItems = 'center';
        modal.style.zIndex = '1000';
        modal.style.opacity = '0';
        modal.style.transition = 'opacity 0.5s ease';

        var modalImg = document.createElement('img');
        modalImg.src = window.getComputedStyle(e.target).backgroundImage.slice(5, -2); 
        modalImg.style.maxWidth = '90%';
        modalImg.style.maxHeight = '90%';

        var closeButton = document.createElement('button');
        closeButton.textContent = 'X';
        closeButton.style.position = 'absolute';
        closeButton.style.top = '20px';
        closeButton.style.right = '20px';
        closeButton.style.padding = '10px';
        closeButton.style.fontSize = '20px';
        closeButton.style.cursor = 'pointer';
        closeButton.style.transition = 'transform 0.3s ease';
        closeButton.style.backgroundColor = 'transparent';
        closeButton.style.color = 'white';
        closeButton.style.border = 'none';

        closeButton.onmouseover = function() {
            this.style.transform = 'scale(1.2)';
        }
        closeButton.onmouseout = function() {
            this.style.transform = 'scale(1)';
        }

        modal.appendChild(modalImg);
        modal.appendChild(closeButton);

        document.body.appendChild(modal);

        setTimeout(function() {
            modal.style.opacity = '1';
        }, 0);

        closeButton.addEventListener('click', function() {
            modal.style.opacity = '0';
            setTimeout(function() {
                modal.remove();
            }, 500);
        });
    });
});

});