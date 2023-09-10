<script>
  import Logo from "$images/small_logo.png";
  import Section from "$components/Section.svelte";
  import "../app.css";
  import IEEE from "$images/IEEE-blue.png";
</script>

<title>IEEE McGill</title>

<div id="content">
  <div id="introduction">
    <h1>
      <img src={Logo} id="logo" alt="IEEE McGill Emblem" />
      IEEE McGill Student Branch
    </h1>
  </div>
  <div id="paragraph">
    <Section>
      IEEE McGill Student Branch is a group of undergraduate and graduate
      electrical & computer engineering students who want to have fun, make
      friends, meet new people and learn about research and new innovations. We
      offer a convivial platform for networking, volunteerism, soft skills and
      leadership, discounts, awards and recognition.

      <br />
      <br />

      McGill University IEEE student branch was established in April 1968 and
      currently has over 260 members, one of the largest branches in Eastern
      Canada. We are dedicated to the development of professional skills of
      electrical & computer engineering as well as computer science students.
      IEEE and its members inspire a global community to innovate for a better
      tomorrow through its more than 400,000 members in more than 160 countries,
      and its highly cited publications, conferences, technology standards, and
      professional and educational activities. IEEE is the trusted “voice” for
      engineering, computing, and technology information around the globe.
      <br />
    </Section>
  </div>
</div>

<!-- <h1>Affiliations</h1>
<div id="affiliation">
  <Section>
    <div class="grid grid-cols-3 items-center">
      <img src={IEEE} alt="IEEE Blue Logo" id="IEEE" />
      <span class="col-span-2">
        IEEE (the Institute of Electrical and Electronics Engineers) is the
        world's leading professional not-for-profit association for the
        advancement of technology.
      </span>
    </div>
  </Section>
</div> -->

<style lang="postcss">
  #logo {
    @apply inline w-20 mx-3;
  }

  h1 {
    @apply border-0 p-3 my-2 text-center text-3xl;
  }

  #content {
    #introduction {
      @media screen md {
        @apply grid grid-cols-2 items-center;
      }
    }

    #paragraph {
      @apply text-left;
    }
  }
  /* #IEEE {
    @apply w-48;
  } */
</style>
