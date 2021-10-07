/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Feature from 'components/cards/feature';

import individual from 'assets/images/icons/5.png';
import team from 'assets/images/icons/2.png';
import org from 'assets/images/icons/6.png';

const data = [
  {
    id: 1,
    icon: individual,
    title: 'High Quality Products Only',
    description: `To advertise products, a business must pass a thorough background check. We dive into the deepest parts of the internet to look for information and reviews.`,
  },
  {
    id: 2,
    icon: team,
    title: 'Right on Time!',
    description: `Estimated shipping time is agreed upon accepting the offer. The business has to respect the agreed terms.`,
  },
  {
    id: 3,
    icon: org,
    title: 'It Keeps on Giving',
    description: `Some shops might offer you gift cards, special offers, and discount codes in return for showcasing their products!`,
  },
];

const Services = () => {
  return (
    <Box as="section" id="features" variant="section.features" style={{paddingTop: '69px'}}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="No Wish.com quality products!"
          description="We care about you and what you get by becoming our partner. Every business that wants to send products is carefully reviewed."
        />
        <Box sx={styles.features}>
          {data?.map((item) => (
            <Feature key={item.id} className="feature-item" data={item} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  heading: {
    marginBottom: [40, 50, 60, 80],
    maxWidth: ['none', null, null, 565, null, 'none'],
    h2: {
      color: 'heading',
      fontSize: ['28px', '32px', '32px', '32px', '32px', '32px', '40px'],
    },
    P: {
      fontSize: ['16px', '16px', '16px', '16px', '14px', '16px'],
      maxWidth: [510],
      m: ['5px auto 0'],
    },
  },
  features: {
    gap: [30, 30, 60, 40, 30, 60],
    display: ['grid', 'grid'],
    gridTemplateColumns: [
      'repeat(1, 1fr)',
      'repeat(1, 1fr)',
      'repeat(1, 1fr)',
      'repeat(2, 1fr)',
      'repeat(3, 1fr)',
    ],
    '.feature-item': {
      display: ['block', 'block', 'flex', 'flex', 'block', 'flex'],
      textAlign: ['center', 'center', 'left', 'left', 'center', 'left'],
      maxWidth: [290, 260, 'none'],
      m: ['0 auto', '0 auto', 0],
      figure: {
        m: [
          '0 0 15px',
          '0 0 15px',
          '0 30px 0 0',
          '0 30px 0 0',
          '0 0 15px',
          '0 30px 0 0',
        ],
      },
      h4: {
        fontWeight: [700],
        mb: ['15px', '15px', '20px', '15px'],
      },
      p: {
        fontSize: ['14px', '14px', '16px', '16px', '14px', '16px'],
      },
    },
  },
};
