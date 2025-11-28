import React from 'react';
import Link from 'next/link';

const SectionWrapper = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-10 md:mb-12">
    <h2 className="font-semibold text-primary uppercase text-lg md:text-xl lg:text-[23px] mb-4 tracking-wide">{title}</h2>
    <div className="text-sm text-muted-foreground leading-7">{children}</div>
  </div>
);

const LinkSeparator = () => <span className="mx-2 text-gray-400">|</span>;

const SeoLink = ({ href = '#', children }: { href?: string; children: React.ReactNode }) => (
  <Link href={href} className="text-primary hover:underline">
    {children}
  </Link>
);

const MOST_SEARCHED_LINKS = [
  "Camphor Vaporizer with Camphor Tablets", "Bhimseni Sambrani Powder", "Four Seasons Premium Bambooless Incense", "Camphor Vaporizer (Premium) With Bhimseni Camphor Tablets 100 gm", "Lavender Bambooless Solid Dhoop", "Oudh Natural Incense", "Camphor Mosquito Repellent Refill - Pack of 3", "From Mystic to the Works - Whose Fragrance Meets Royalty", "Camphor Mosquito Repellent Refill - Pack of 8", "Haripriya Pure Puja Oil - 5 Ltrs", "Pure Stilroyan Camphor - 50g", "Hemant Camphor Vaporizer", "Oudh", "Oudh Bambooless Solid Dhoop", "Three in One Agarbatti Combo - Pack of 2 (250gm per Pack)", "Naivedya Cup Sambrani - Small 8 N", "Haripriya Pure Oil - 500 Ltrs", "19\" Long BP Long Agarbatti", "Omya Sambrani Havan",
];

const NEW_ARRIVAL_LINKS = [
  "Udyantaya Gift Box", "Palm Leaf Hanuman Chalisa", "Parampara Three in One", "Haripriya Shakthipeeth", "Haripriya Sugandha", "Haripriya Panchatatva", "Haripriya Navadantari", "Haripriya Dhanvantari", "Season's Greeting Gift Box", "Fragrant Ceramic Pot Pourri - Box of Rose /Jasmine - Krishna with Cow", "Tirru Niru Pouch", "Durgeshwari Navratri Pack", "Udyantaya Navratri Pack", "Mitti Diya Set of 4", "Sambrani Havan Cups - Maha Bhakti", "Maha Pooja Oils - Maa Kamakya", "Good Luck Vetiver Car Air Freshener", "Good Luck Car Air Freshener - Vetiver Heart Crystal Car Gel Pod", "Citrus Sunshine Gel Pod", "Marigold Gel Pod", "Rose Honey Aroma Gel Pod", "Rose Athema Jar", "Citrus Sunshine Aroma Jar", "Medini 6 in 1", "Premium Bambooless Solid Dhoop", "Lavender Matt Aroma Tax", "Play, Learn & Pray with Ganesha",
];

const CYCLE_SPECIALITY_LINKS = [
  "Dasara Agarbatti", "Yagna Agarbatti", "Woods Agarbatti", "Oudh Natural Incense", "Rahasyamai 19\" Long Agarbatti", "Woody Agarbatti Combo", "Asli Bakhoor Handcrafted Incense Sticks", "Durian Incense Sticks", "Ambience Incense Sticks", "Navin Sambrani", "Royal Secret Premium Masala Agarbatti", "Premium Yagna Agarbatti", "Woods 19\" Long Agarbatti", "Three Divine Agarbatti", "Share-e-Taj Agarbatti", "Assorted Export Incense Pack", "Pack of 2 - Dasara Agarbatti", "Royal Sandal Agarbatti", "Assorted Classic", "Royal Rose Agarbatti", "Woods Agarbatti Pack with Free Ash Catcher", "Royal Jasmine Agarbatti", "Akhand Jyothi (6 Feet) Agarbatti", "Akhand Jyothi (10 Feet) Agarbatti", "Akhand Jyothi (20 Feet) Agarbatti", "Akhand Jyothi (30 Feet) Agarbatti", "Assorted Classic", "Assorted Havi Agarbatti",
];

const GIFTING_LINKS = [
  "Durgeshwari Navratri Pack", "Udyantaya Navratri Pack with Book", "Rose Peony Aroma Pod", "Play Learn & Pray with Ganesha", "From Mystic to the World", "Trioincense Ultra", "Cycle Bhagwad Gita Calendar", "Camphor Bambooless Solid Dhoop", "Lavender Bambooless Solid Dhoop", "Prerna Three in One Bambooless Solid Dhoop", "Cycle Lia Incense Sticks & Case Gift Set", "Good Luck Rose Agarbatti", "Om Shanthi Home Puja Essentials Box", "Naivedya Gold Combo ", "Heritage Divine Shakti Pack", "Sai Baba Electric Vaporizer Kapoor Dani", "Air Karom Refreshing Collection", "Camphor Vaporizer", "Terracotta Wax Lillya", "Camphor Pouch Combo", "Surbahi Incense Sticks", "Small Wooden Manjusha", "Cycleclassics Gift Box", "Season's Greetings Gift Box", "Esperi Celebration Gift Box",
];

const PUJA_RITUAL_LINKS = [
  "Om Shanthi Puja Room", "Devara Doll Stand", "Merry Go Round Agarbatti Stand", "Wooden Pooja Peeta", "Brass Udhdharane", "Brass Panchapatre", "Goddess Lakshmi Idol", "Wooden Round Agarbatti Stand", "Brass Dhoopa Arati", "Wooden Dhwaj Arati for Meditation and Puja", "Lord Ganesha Idol", "Puja Asana", "Pooja Chopai / Manai / Peeta", "Hanuman Idol", "Lotus Teegha Holder and Incense Ash Catcher", "Tirupati Agarbatti Stand and Ash Catcher", "Goddess Saraswati Idol", "Goddess Durga Idol", "Shree Ram Darbar Idol", "Handcrafted Teawood Puja Peeta", "Ganesha Agarbatti Stand ", "Good Luck Gdash", "Havan Sets", "Goshala 2in1",
];

const KIDS_PUZZLE_LINKS = [
    "Kids Jigsaw Puzzle - Krishna with Cow", "Fun, Focus & Devotion", "Tiny Flute Puzzle", "Kids Jigsaw Puzzle - Ganesha with Kids", "Fun, Focus & Devotion", "Tiny Trunk Puzzle", "Kids Jigsaw Puzzle - Krishna Makhan Chor", "Fun, Focus & Devotion", "Tiny Flute Puzzle", "Kids Jigsaw Puzzle - Ganesha with Family", "Fun, Focus & Devotion", "Tiny Trunk Puzzle", "Play Learn & Pray with Ganesha - Whose Fun Meets Wisdom and Devotion", "Om Shanthi Block Book for Kids (Washable and Reusable)", "Om Shanthi Cloth Book for Kids (Washable and Reusable)",
];

const BAMBOOLESS_LINKS = [
    "Camphor Bambooless Solid Dhoop", "Lemongrass Bambooless Solid Dhoop", "Lavender Bambooless Solid Dhoop", "Jasmine Bambooless Solid Dhoop", "Solid Dhoop Sticks With Holder", "Bansuri Solid Dhoop", "Bansuri Rose Solid Dhoop", "Bansuri Loban Solid Dhoop", "Incense Sticks", "Bansuri Guggul Solid Dhoop Sticks", "Bansuri Chandan Solid Dhoop", "Incense Sticks", "Arihant Jain Dhoop", "Rhythm Sandal Solid Dhoop", "Himalayan Malti Lia Solid Dhoop Sticks", "Soulveda Solid Dhoop Pine", "Soulveda Solid Dhoop Fir", "Soulveda Solid Dhoop Spruce", "Lia Beautiful Day Solid Dhoop Sticks", "Pranali Jain Dhoop", "Soulveda Solid Dhoop Vetiver", "Cycle Amber Solid Dhoop", "Twilight Touch Lia Solid Dhoop Sticks", "Soulveda Solid Dhoop Earth", "Four Seasons Premium Bambooless Incense", "Guggul Bambooless Solid Dhoop Sticks", "Rhythm Amber Solid Dhoop", "Prerna Three in One Bambooless Solid Dhoop", "Trioincense Ultra", "Trio Incense Bambooless Solid Dhoop", "Oudh Bambooless Solid Dhoop", "Custom Bambooless Cone", "Rhythm Champa Solid Dhoop",
];

const OUR_BRANDS_LINKS = ["Cycle", "Amogha", "IRIS", "Soulveda", "Gavi", "Heritage", "Pujaroom", "Lia", "Flute", "Rhythm", "Vasu", "Om Shanthi", "Sampoorna Dhyan", "MyIncense", "Prkhu"];


export default function SeoContent() {
  return (
    <div className="bg-background">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-10 md:py-16">
        <SectionWrapper title="Most Searched for on Cycle.in">
          {MOST_SEARCHED_LINKS.map((link, i) => (
            <React.Fragment key={i}>
              <SeoLink>{link}</SeoLink>
              {i < MOST_SEARCHED_LINKS.length - 1 && <LinkSeparator />}
            </React.Fragment>
          ))}
        </SectionWrapper>
        
        <SectionWrapper title="NEW ARRIVAL">
          {NEW_ARRIVAL_LINKS.map((link, i) => (
            <React.Fragment key={i}>
              <SeoLink>{link}</SeoLink>
              {i < NEW_ARRIVAL_LINKS.length - 1 && <LinkSeparator />}
            </React.Fragment>
          ))}
        </SectionWrapper>
        
        <SectionWrapper title="CYCLE SPECIALITY">
          {CYCLE_SPECIALITY_LINKS.map((link, i) => (
            <React.Fragment key={i}>
              <SeoLink>{link}</SeoLink>
              {i < CYCLE_SPECIALITY_LINKS.length - 1 && <LinkSeparator />}
            </React.Fragment>
          ))}
        </SectionWrapper>
        
        <SectionWrapper title="GIFTING">
          {GIFTING_LINKS.map((link, i) => (
            <React.Fragment key={i}>
              <SeoLink>{link}</SeoLink>
              {i < GIFTING_LINKS.length - 1 && <LinkSeparator />}
            </React.Fragment>
          ))}
        </SectionWrapper>
        
        <SectionWrapper title="PUJA ACCESSORIES & RITUAL ITEMS">
          {PUJA_RITUAL_LINKS.map((link, i) => (
            <React.Fragment key={i}>
              <SeoLink>{link}</SeoLink>
              {i < PUJA_RITUAL_LINKS.length - 1 && <LinkSeparator />}
            </React.Fragment>
          ))}
        </SectionWrapper>

        <SectionWrapper title="KIDS & PUZZLE GIFTS">
            {KIDS_PUZZLE_LINKS.map((link, i) => (
                <React.Fragment key={i}>
                <SeoLink>{link}</SeoLink>
                {i < KIDS_PUZZLE_LINKS.length - 1 && <LinkSeparator />}
                </React.Fragment>
            ))}
        </SectionWrapper>
        
        <SectionWrapper title="BAMBOOLESS INCENSE">
            {BAMBOOLESS_LINKS.map((link, i) => (
                <React.Fragment key={i}>
                <SeoLink>{link}</SeoLink>
                {i < BAMBOOLESS_LINKS.length - 1 && <LinkSeparator />}
                </React.Fragment>
            ))}
        </SectionWrapper>
        
        <SectionWrapper title="AGARBATTI CATEGORIES">
            <p>
            <strong className="text-foreground font-medium">By Brand:</strong> <SeoLink>Cycle</SeoLink> <LinkSeparator/> <SeoLink>Cycle Speciality</SeoLink> <LinkSeparator/> <SeoLink>Amogha</SeoLink> <LinkSeparator/> <SeoLink>Heritage</SeoLink> <LinkSeparator/> <SeoLink>Pushkarini</SeoLink> <LinkSeparator/> <SeoLink>Lia</SeoLink> <LinkSeparator/> <SeoLink>Rhythm</SeoLink> <LinkSeparator/> <SeoLink>Vasu</SeoLink> <LinkSeparator/> <SeoLink>Flute</SeoLink> <LinkSeparator/> <SeoLink>Nature&apos;s Gift</SeoLink> <LinkSeparator/> <SeoLink>Good Luck</SeoLink> <LinkSeparator/> <SeoLink>Soulveda</SeoLink>
            </p>
            <p className='mt-2'>
            <strong className="text-foreground font-medium">By Type:</strong> <SeoLink>Scented Bathi</SeoLink> <LinkSeparator/> <SeoLink>Masala Bathi</SeoLink> <LinkSeparator/> <SeoLink>Base Bathi</SeoLink> <LinkSeparator/> <SeoLink>Long Bathi</SeoLink>
            </p>
            <p className='mt-2'>
            <strong className="text-foreground font-medium">By Fragrance:</strong> <SeoLink>Fruity</SeoLink> <LinkSeparator/> <SeoLink>Sandalwood</SeoLink> <LinkSeparator/> <SeoLink>Woody</SeoLink> <LinkSeparator/> <SeoLink>Floral</SeoLink> <LinkSeparator/> <SeoLink>Oriental</SeoLink> <LinkSeparator/> <SeoLink>Cosmetic</SeoLink> <LinkSeparator/> <SeoLink>Perfumic</SeoLink> <LinkSeparator/> <SeoLink>Fresh</SeoLink> <LinkSeparator/> <SeoLink>Bouquet</SeoLink> <LinkSeparator/> <SeoLink>Amber</SeoLink>
            </p>
            <p className='mt-2'>
            <strong className="text-foreground font-medium">Best Agarbattis:</strong> <SeoLink>Rahasyamai 19&quot; Long Agarbatti</SeoLink> <LinkSeparator/> <SeoLink>Pushkarini 19&quot; Long Agarbatti</SeoLink> <LinkSeparator/> <SeoLink>Woods Agarbatti - Fragrance of the Forest</SeoLink> <LinkSeparator/> <SeoLink>Parampara Agarbatti</SeoLink> <LinkSeparator/> <SeoLink>Fairy Tale 19&quot; Long Agarbatti</SeoLink>
            </p>
        </SectionWrapper>

        <SectionWrapper title="CUSTOM INCENSE">
            <p><SeoLink>Custom Agarbatti</SeoLink> <LinkSeparator /> <SeoLink>Custom Bambooless Incense</SeoLink> <LinkSeparator /> <SeoLink>Custom Agarbatti Cones</SeoLink> <LinkSeparator /> <SeoLink>Custom Sambrani Powder</SeoLink></p>
        </SectionWrapper>

        <SectionWrapper title="PARAMPARA & HERITAGE SERIES">
            <p><SeoLink>Parampara Three in One</SeoLink> <LinkSeparator /> <SeoLink>Exclusive Edition</SeoLink> <LinkSeparator /> <SeoLink>Heritage Legacy Collection Pack</SeoLink> <LinkSeparator /> <SeoLink>Heritage Classic Radiant Rose &amp; Chandanam</SeoLink> <LinkSeparator /> <SeoLink>Heritage Divine Shakti Pack for Puja &amp; Festivals</SeoLink> <LinkSeparator /> <SeoLink>Heritage Radiant Rose Agarbatti</SeoLink> <LinkSeparator /> <SeoLink>Heritage Radiant Rose Agarbatti - Pack of 3</SeoLink></p>
        </SectionWrapper>

        <SectionWrapper title="HARIPRIYA FRAGRANCES">
            <p><SeoLink>Haripriya Shakthipeeth - Rose Amber Fragrance for Strength &amp; Serenity</SeoLink> <LinkSeparator /> <SeoLink>Haripriya Sugandha - Divine Sandal Fragrance for Prayer &amp; Positivity</SeoLink> <LinkSeparator /> <SeoLink>Haripriya Panchatatva - Divine Cosmetic Fragrance for Balance &amp; Clarity</SeoLink> <LinkSeparator /> <SeoLink>Haripriya Navadantari - Calm &amp; Soothing Fragrance for Meditation</SeoLink> <LinkSeparator /> <SeoLink>Haripriya Dhanvantari - Your Fragrant Wish In Every Prayer</SeoLink></p>
        </SectionWrapper>
        
        <SectionWrapper title="DHOOP AND SAMBRANI">
            <p><SeoLink>Incense Cones</SeoLink> <LinkSeparator /> <SeoLink>Lia Incense Cones</SeoLink> <LinkSeparator /> <SeoLink>Amogha Incense Cones</SeoLink> <LinkSeparator /> <SeoLink>Cycle Incense Cones</SeoLink> <LinkSeparator /> <SeoLink>Rhythm Incense Cones</SeoLink> <LinkSeparator /> <SeoLink>Flute Incense Cones</SeoLink> <LinkSeparator /> <SeoLink>Om Shanthi Havan Cups</SeoLink> <LinkSeparator /> <SeoLink>Naivedya Cup Sambrani</SeoLink> <LinkSeparator /> <SeoLink>Pushkarini Cup Sambrani</SeoLink> <LinkSeparator /> <SeoLink>Navin Cup Sambrani</SeoLink> <LinkSeparator /> <SeoLink>Gavi Cup Sambrani</SeoLink> <LinkSeparator /> <SeoLink>Bansuri Cups</SeoLink> <LinkSeparator /> <SeoLink>Wet Dhoop</SeoLink> <LinkSeparator /> <SeoLink>Sambrani Powder</SeoLink> <LinkSeparator /> <SeoLink>Stem Sambrani</SeoLink></p>
        </SectionWrapper>
        
        <SectionWrapper title="PREMIUM PUJA OILS">
            <p><SeoLink>Camphor Puja Oil - Sampoorna Dhyan</SeoLink> <LinkSeparator /> <SeoLink>Navin Puja Oil - Sampoorna Dhyan</SeoLink> <LinkSeparator /> <SeoLink>Sandal Puja Oil - Sampoorna Dhyan</SeoLink> <LinkSeparator /> <SeoLink>Chandan Puja Oil - Sampoorna Dhyan</SeoLink> <LinkSeparator /> <SeoLink>Jasmine Puja Oil - Sampoorna Dhyan</SeoLink> <LinkSeparator /> <SeoLink>Parijatha Puja Oil - Sampoorna Dhyan</SeoLink></p>
        </SectionWrapper>

        <SectionWrapper title="GOOD LUCK & COLLECTIONS">
            <p><SeoLink>Good Luck Premium Incense - The Blue</SeoLink> <LinkSeparator /> <SeoLink>Good Luck Premium Incense - The GOLD</SeoLink> <LinkSeparator /> <SeoLink>Good Luck Premium Incense - The Black</SeoLink> <LinkSeparator /> <SeoLink>Good Luck Rose Agarbatti</SeoLink> <LinkSeparator /> <SeoLink>GoodLuck Agarbatti Combo - Pack of 5</SeoLink></p>
        </SectionWrapper>


        <div className="space-y-12 text-sm text-foreground leading-7">
          <div>
            <h2 className="font-semibold text-primary uppercase text-lg md:text-xl lg:text-[23px] mb-4 tracking-wide">ONLINE SHOPPING FOR SPIRITUAL AND AROMATIC ESSENTIALS AT CYCLE.IN</h2>
            <p>If you want to experience authentic Indian fragrances, traditional puja essentials, and premium incense products, you are at the right place. Cycle.in is your ultimate destination for spiritual and aromatic needs, offering a vast collection of agarbatti, dhoop, sambrani, puja accessories, home fragrances, and personal care products.</p>
            <p className='mt-4'>It is time to transform your prayer rituals and living spaces with our carefully crafted offerings. Our online store brings you over 76 years of fragrance expertise straight from India&apos;s most trusted incense brand. You can shop online at Cycle.in from the comfort of your home and get your favourites delivered right to your doorstep.</p>
          </div>
          <div>
            <h2 className="font-semibold text-primary uppercase text-lg md:text-xl lg:text-[23px] mb-4 tracking-wide">BEST ONLINE SHOPPING SITE IN INDIA FOR INCENSE AND SPIRITUAL PRODUCTS</h2>
            <p>Be it daily prayers, meditation sessions, or creating peaceful ambiences, Cycle.in offers you the ideal combination of tradition and innovation. You will realise that the possibilities are endless when it comes to the types of fragrances and spiritual products you can purchase for different occasions and needs.</p>
          </div>
          <div>
            <h3 className="font-semibold text-primary text-base md:text-lg mb-3">Premium Agarbatti</h3>
            <p>At Cycle.in you will find countless options in traditional and contemporary <SeoLink>incense sticks</SeoLink>. Start your day with the divine aroma of <SeoLink>Cycle Three in One Agarbatti</SeoLink>, which combines three distinct fragrances in a single pack. Experience the rich heritage of <SeoLink>Cycle Heritage Agarbatti</SeoLink>, perfect for your morning puja. Create a serene atmosphere with <SeoLink>Cycle Rhythm Agarbatti</SeoLink>, designed for meditation and relaxation.</p>
            <p className='mt-4'>The timeless fragrance of sandalwood awaits you in our <SeoLink>Cycle Sandalwood Agarbatti</SeoLink> range. Explore our luxury collections like <SeoLink>Dasara Incense Sticks</SeoLink>, available in red and blue fragrances, crafted for those special spiritual moments.</p>
            <p className='mt-4'>The <SeoLink>Amogha Collection</SeoLink> brings you rare and precious scents, including Loban, Myrrh, Bakul, Musk, Jatamansi, and <SeoLink>Sambrani Masala Incense sticks</SeoLink>. For those seeking balance and harmony, the <SeoLink>Soulveda Collection</SeoLink> offers five unique variants representing the elements - <SeoLink>Space</SeoLink>, <SeoLink>Earth</SeoLink>, <SeoLink>Water</SeoLink>, <SeoLink>Air</SeoLink>, and <SeoLink>Fire</SeoLink>.</p>
            <p className='mt-4'>Choose from <SeoLink>Cycle Woody Agarbatti</SeoLink>, <SeoLink>Cycle Amber Agarbatti</SeoLink>, <SeoLink>Cycle Flute Agarbatti</SeoLink>, <SeoLink>Lia Agarbatti</SeoLink>, <SeoLink>Dasara Agarbatti</SeoLink>, <SeoLink>Morning Glory Agarbatti</SeoLink>, <SeoLink>Sambrani Agarbatti</SeoLink>, <SeoLink>Prestige Agarbatti</SeoLink> and <SeoLink>Woods Agarbatti</SeoLink>. Each variant is carefully crafted with pure ingredients to deliver long-lasting fragrances. Our combo packs, like the <SeoLink>All in One Incense Pack</SeoLink>, give you variety in a single purchase.</p>
          </div>
          <div>
            <h3 className="font-semibold text-primary text-base md:text-lg mb-3">Eco-Friendly Bambooless Incense</h3>
            <p>Modern spirituality needs traditional values with our <SeoLink>bambooless incense</SeoLink> range. These products are crafted without bamboo sticks, making them environmentally conscious choices. Experience the purity of bambooless incense sticks that burn cleaner and longer. Try our <SeoLink>Dhoop Batti</SeoLink> that delivers intense, concentrated fragrances perfect for evening prayers.</p>
            <p className='mt-4'>The <SeoLink>Lavender Bambooless Solid Dhoop</SeoLink> brings calming aromatherapy benefits to your home. <SeoLink>Pushkarini Dhoop Bath</SeoLink> offers a divine fragrance experience rooted in ancient temple traditions. For devotees of Lord Shiva, the <SeoLink>Shiva Dhoop Agarbatti</SeoLink> creates the perfect devotional atmosphere.</p>
            <p className='mt-4'>We also offer <SeoLink>custom bambooless incense</SeoLink> for those who want personalised fragrances. This category represents our commitment to sustainable practices while maintaining the highest quality standards.</p>
          </div>
        </div>

        <SectionWrapper title="OUR BRANDS:">
          <p>Explore our complete family of trusted fragrance and puja brands. Each one is crafted to support different rituals, moods, and spaces.</p>
          <p className='mt-2'>
          {OUR_BRANDS_LINKS.map((link, i) => (
            <React.Fragment key={i}>
              <SeoLink>{link}</SeoLink>
              {i < OUR_BRANDS_LINKS.length - 1 && <LinkSeparator />}
            </React.Fragment>
          ))}
          </p>
        </SectionWrapper>
      </div>
    </div>
  );
}
