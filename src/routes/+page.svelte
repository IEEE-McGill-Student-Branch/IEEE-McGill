<script>
  import Logo from "$images/small_logo.png";
  import Section from "$components/Section.svelte";
  import Footer from "$components/Footer.svelte";
  import "../app.css";
</script>

<title>IEEE McGill</title>
<h1>
  <img src={Logo} alt="IEEE McGill Emblem" style="width: 5rem;" /> IEEE McGill
</h1>
<Section>
  McGill University IEEE (the Institute of Electrical and Electronics Engineers
  Inc.) Student Branch is dedicated to the development of professional skills of
  electrical & computer engineering as well as computer science students. IEEE
  is the world’s leading professional not-for-profit association for the
  advancement of technology.
</Section>

<h2>About IEEE McGill Student Branch</h2>
<Section>
  McGill University IEEE (the Institute of Electrical and Electronics Engineers
  Inc.) student branch was established in April 1968 and currently has over 260
  members, one of the largest IEEE student branches in Eastern Canada. The IEEE
  student branch at McGill is dedicated to the development of professional
  skills of electrical & computer engineering as well as computer science
  students. IEEE and its members inspire a global community to innovate for a
  better tomorrow through its more than 400,000 members in more than 160
  countries, and its highly cited publications, conferences, technology
  standards, and professional and educational activities. IEEE is the trusted
  “voice” for engineering, computing, and technology information around the
  globe.
  <br /><br />
  We are a group of undergraduate and graduate electrical & computer engineering
  students who want to have fun, make friends, meet new people and learn about research
  and new innovations.
  <br /><br />
  We offer a convivial platform for networking, volunteerism, soft skills and leadership,
  discounts, awards and recognition.
</Section>

<h2>Upcoming Events</h2>
<Section>
  Check out our <a class="link" href="/events">events page</a> for more information.
</Section>

<!-- <h2>Join our newsletter</h2>
<Section>
  <iframe
    title="Newsletter"
    src="https://docs.google.com/forms/d/e/1FAIpQLSfBLRxNxYmR7UxWEuJAscu5ZIueQRd3guV9stMVClLK3zghig/viewform?embedded=true"
    >Loading…
  </iframe>
</Section> -->

<Footer />

<style lang="postcss">
  h1 {
    font-size: 4rem;
    text-align: center;
  }

  h2 {
    @apply text-2xl justify-between px-4 py-2;
    text-align: center;
  }

  a {
    @apply font-semibold text-red-500 cursor-pointer;
  }

  iframe {
    margin: auto;
    display: block;
    min-width: 75vw;
    width: 100%;
    height: 100vh;
    padding: 0.5rem;
    margin: 1rem auto;
  }
</style>
