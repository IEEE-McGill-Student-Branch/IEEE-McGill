<script>
  import Logo from "$images/small_logo.png";
  import Section from "$components/Section.svelte";
  import "../app.css";
</script>

<title>IEEE McGill</title>

<div class="space-y-6">
  <!-- Introduction -->
  <div class="text-center md:grid md:grid-cols-2 md:items-center">
    <h1
      class="text-3xl font-bold p-3 my-2 flex items-center justify-center md:justify-start"
    >
      <img src={Logo} alt="IEEE McGill Emblem" class="inline size-16 mx-3" />
      IEEE McGill Student Branch
    </h1>
  </div>

  <!-- Paragraph Section -->
  <Section>
    <p class="text-left leading-relaxed">
      The McGill University IEEE Student Branch was established in April 1968
      and is one of the largest IEEE student branches in Eastern Canada. The
      IEEE student branch at McGill is dedicated to the development of
      professional skills of electrical & computer engineering students and the
      larger academic community.
    </p>

    <p class="text-left leading-relaxed mt-4">
      We are mainly a group of undergraduate and graduate ECE & CS students who
      want to have a great time, create a friendly community, and most
      importantly learn about research and new innovations. We offer a welcoming
      club for networking, volunteerism, teamwork, soft skills, leadership, and
      recognition. We are under the tutelage of the larger IEEE organization and
      organize events and activities such as talks, workshops, competitions,
      company tours, etc. for the benefit of all ECE/CS students.
    </p>

    <p class="text-left leading-relaxed mt-4">
      The IEEE organization (Institute of Electrical and Electronics Engineers)
      and its members inspire a global community to innovate for a better
      tomorrow through its more than 400,000 members in more than 160 countries,
      and its highly cited publications, conferences, technology standards, and
      professional and educational activities. IEEE is considered the trusted
      “voice” for engineering, computing, and technology information around the
      globe.
    </p>
  </Section>
</div>
