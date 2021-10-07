/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Image } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Accordion from 'components/accordion/accordion';
import feature from 'assets/images/home-settings.svg';
import emoji from 'assets/images/icons/emoji-2.png';

const data = [
  {
    title: 'Let them notice you!',
    contents: (
      <div>
        Post your unit on Emporooms App in a few easy steps.<br />
        Set which items you're looking for and you're done!
      </div>
    ),
  },
  {
    title: 'Review the offers you get',
    contents: (
      <div>
        You don't have to accept every offer you get. Offers can be reviewed, accepted, or declined. Only when you accept it, the product gets shipped to you.
      </div>
    ),
  },
  {
    title: `It's Showtime!`,
    contents: (
      <div>
        Once the product arrives, it's time to showcase it. Put it in a nice place and let your visitors enjoy it! (Product owners may ask for product photos upon your received)
      </div>
    ),
  },
];

const ExcitingFeatures = () => {
  return (
    <Box as="section" id="How it Works" variant="section.excitingFeatures">
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.illustration}>
            <Image src={feature} alt="feature" />
          </Box>
          <Box sx={styles.rightContent}>
            <SectionHeading
              sx={styles.heading}
              title="We're on a mission to bring the best products out there to your space"
              description="With Emprooms, advertisers get unparalleled access to an audience who is sampling their products first-hand, Hosts get additional revenue streams, and guests get to try incredible products as part of their stay."
            />
            <Box sx={styles.accordionGroup}>
              <Accordion items={data} />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ExcitingFeatures;

const styles = {
  contentWrapper: {
    // gap: [0, 0, 0, 0, 10, 100],
    display: ['block', 'block', 'grid', 'flex', 'grid'],
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'center',
    flexDirection: ['column-reverse'],
    paddingBottom: [0, 0, 0, 0, '50px']
  },
  illustration: {
    display: ['none', 'none', 'block'],
    img: {
      maxWidth: '500px'
    }
  },
  heading: {
    maxWidth: [295, 295, 495, 495, 410, 500],
    textAlign: ['center', null, null, null, 'left'],
    mb: [30],
    ml: ['auto', null, null, null, 0],
    h2: {
      fontSize: ['28px', '28px', '28px', '36px', '32px', '36px', '48px'],
      lineHeight: [1.33, 1.33, 1.26],
      letterSpacing: '-1px',
    },
    img: {
      maxWidth: ['24px', '24px', '24px', '30px', '30px', '30px', '100%'],
      top: ['4px', '8px'],
    },
  },
  accordionGroup: {
    maxWidth: ['none', null, null, 600, 'none'],
    '.accordion-item': {
      backgroundColor: '#F6F8FB',
      borderRadius: 10,
      p: [
        '20px 30px',
        '20px 30px',
        '30px 45px',
        '20px 25px 20px',
        '30px 45px',
        '20px 35px',
      ],
      '&.is-open': {
        backgroundColor: '#fff',
        boxShadow: '0px 9px 30px rgba(69, 88, 157, 0.08)',
      },
    },
  },
};
