<template>
  <div>
    <FirstSection />
    <SecondSection />
    <ThirdSection />
    <FourthSection />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      cards: [
        {
          picture: require('~/static/images/services/management.png'),
          title: 'Social media management',
          content:
            'Transformation of social media presence via high-quality content, daily-engagements and well defined social media presence',
        },
        {
          picture: require('~/static/images/services/strategy.png'),
          title: 'Brand strategy',
          content:
            'Well-outlined growth strategy with focus on making your brand stand out exclusively',
        },
        {
          picture: require('~/static/images/services/content.png'),
          title: 'Content creation',
          content:
            'Exquisitely crafted content to attract your business audience and target market in response to your business needs',
        },
        {
          picture: require('~/static/images/services/calendar.png'),
          title: 'Content calendar drafting',
          content:
            'Exquisitely crafted content to attract your business audience and target market in response to your business needs',
        },
        {
          picture: require('~/static/images/services/ads.png'),
          title: 'Ads Management',
          content:
            'Exquisitely crafted content to attract your business audience and target market in response to your business needs',
        },
      ],
      benefits: [
        {
          number: '01',
          title: 'Understand Your Target Audience & Competition',
          content:
            'It’s of essence to carefully think about what you feed your audience. I do the needful by conducting a preliminary audit of your social media presence, your company as a whole, your competitors, and your target market.',
        },
        {
          number: '02',
          title: 'Fresh perspective and inspiration',
          content:
            'Understanding how quickly social media changes and evolves, I always provide a fresh perspective on ideas to ensure that your social media content, presence and engagements are up to par.',
        },
        {
          number: '03',
          title: 'Reputation management',
          content:
            'Listening to your audience and customers feedback, in addition to strategically acting on the information derived is one of the many ways I increase your brand reputation positively.',
        },
        {
          number: '04',
          title: 'Customer-Centric',
          content:
            'Exhibiting a culture of doing business that focuses on creating the best experience for your customers is my core strength in increasing brand loyalty in the industry. ',
        },
      ],
    }
  },
}
</script>

<style scoped lang="scss"></style>
