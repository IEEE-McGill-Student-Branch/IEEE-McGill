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
      The McGill University IEEE Student Branch was established in April 1968
      and is one of the largest IEEE student branches in Eastern Canada. The
      IEEE student branch at McGill is dedicated to the development of
      professional skills of electrical & computer engineering students and the
      larger academic community.

      <br />
      <br />

      We are mainly a group of undergraduate and graduate ECE & CS students who
      want to have a great time, create a friendly community, and most
      importantly learn about research and new innovations. We offer a welcoming
      club for networking, volunteerism, teamwork, soft skills, leadership, and
      recognition. We are under the tutelage of the larger IEEE organization and
      organize events and activities such as talks, workshops, competitions,
      company tours etc. for the benefit of all ECE/CS students.
      <br />
      <br />
      The IEEE organization (Institute of Electrical and Electronics Engineers) and
      its members inspire a global community to innovate for a better tomorrow through
      its more than 400,000 members in more than 160 countries, and its highly cited
      publications, conferences, technology standards, and professional and educational
      activities. IEEE is considered the trusted “voice” for engineering, computing,
      and technology information around the globe.
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
