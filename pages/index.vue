<template>
  <div class="flex flex-col lg:flex-row min-h-screen">
    <aside class="w-full lg:w-[300px] p-8 bg-slate-900 text-slate-500">
      <img src="assets/images/client/nino.jpg" class="w-40 mb-5 rounded-full" alt="Profilbild" style="margin: 0 auto; display: block;">
      <h1 class="text-4xl text-center mb-10">Nino Biuk</h1>
      <p class="text-2xl text-left lg:text-center mb-4">Steckbrief</p>
      <ul style="line-height: 1.8rem;">
        <li><i class="mdi mdi-laptop me-2"></i>Software & DevOps Engineer</li>
        <li><i class="mdi mdi-calendar-blank me-2"></i>Beruflich tätig seit 2014</li>
        <li><i class="mdi mdi-monitor me-2"></i>OS: Linux, macOS</li>
        <li><i class="mdi mdi-code-braces me-2"></i>IDE: Primär PHPStorm</li>
        <li><i class="mdi mdi-earth me-2"></i>HR / DE / EN / NL</li>
        <li class="text-green-600"><i class="mdi mdi-email me-1"></i> <a href="mailto:nbiuk.privat@gmail.com">nbiuk.privat@gmail.com</a></li>
      </ul>
    </aside>

    <main class="w-full lg:flex-1 p-10 text-slate-400">
      <div class="mb-10">
        <h1 class="text-4xl lg:text-6xl font-semibold mb-5">Vorwort</h1>
        <p style="line-height: 2em">Diese Seite gibt einen Überblick über meinen technischen Fokus und meine Arbeitsweise.
          In den letzten Jahren habe ich mich vom Full-Stack-Entwickler gezielt in Richtung Backend Engineering weiterentwickelt.
          <br>Mit wachsender Erfahrung wurde schnell klar, dass moderne, skalierbare Software ohne ein solides Verständnis von Architektur, Infrastruktur und Deployment nicht auskommt.
          Daraus entwickelte sich über die Jahre ein klarer Fokus auf DevOps-Themen.
        </p>
      </div>

      <h1 class="text-4xl lg:text-6xl font-semibold mb-5">Stack</h1>
      <div class="mb-10 text-xl lg:text-3xl flex flex-row gap-4 lg:gap-10 overflow-x-auto whitespace-nowrap">
        <button
          class="shrink-0 text-left py-2 px-3 lg:py-0 lg:px-0 text-blue-600"
          :class="{ 'border-b  border-blue-600': activeTab === 'devops' }"
          @click="activeTab = 'devops'"
        >
          <i class="mdi mdi-console me-2"></i>
          DevOps
        </button>

        <button
          class="shrink-0 text-left py-2 px-3 lg:py-0 lg:px-0 text-purple-700"
          :class="{ 'border-b border-purple-700': activeTab === 'backend' }"
          @click="activeTab = 'backend'"
        >
          <i class="mdi mdi-language-php me-2"></i>
          Backend
        </button>

        <button
          class="shrink-0 text-left py-2 px-3 lg:py-0 lg:px-0 text-orange-600"
          :class="{ 'border-b border-orange-600': activeTab === 'frontend' }"
          @click="activeTab = 'frontend'"
        >
          <i class="mdi mdi-language-html5 me-1"></i>
          Frontend
        </button>
      </div>

      <!-- Tab Panels -->
      <div>
        <section v-show="activeTab === 'devops'" class="min-h-[50vh]">
          <div class="grid lg:grid-cols-3 grid-cols-1 gap-x-5">
            <div>
              <ul class="mb-5">
                <li>
                  <span class="text-blue-600 text-2xl">Linux System Administration</span>
                  <ul class="mt-2">
                    <li>Linux Ubuntu Server, RHEL</li>
                    <li>Benutzer- und Gruppenverwaltung, Rechte, Journal, Logs</li>
                    <li>DNS, DHCP</li>
                    <li>Security: firewalld, fail2ban, SELinux, SSH, SSL, Ports</li>
                    <li>Webserver: Apache, Nginx</li>
                    <li>Bash Skripte</li>
                  </ul>
                </li>
              </ul>
              <ul class="mb-5">
                <li>
                  <span class="text-blue-600 text-2xl">Linux Container unter Docker</span>
                  <ul class="mt-2">
                    <li>Dockerfile</li>
                    <li>Docker Compose</li>
                    <li>Docker Netzwerke und Ports</li>
                    <li>Load Balancing (nginx, traefik)</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div>
              <ul class="mb-5">
                <li>
                  <span class="text-blue-600 text-2xl">Versionierung mit git</span>
                  <ul class="mt-2">
                    <li>Grundlegende git-Kommandos (add, commit, pull, push, fetch, checkout, branch, log, history...)</li>
                    <li>Verschiedene Flows wie GitLab Flow</li>
                    <li>Merge und Rebase</li>
                    <li>GitLab CI/CD & Umgebungsvariablen</li>
                    <li>Registry, SemVer, Release Bereitstellung</li>
                  </ul>
                </li>
              </ul>
              <ul class="mb-5">
                <li>
                  <span class="text-blue-600 text-2xl">Container-Orchestrierung</span>
                  <ul class="mt-2">
                    <li>Kubernetes</li>
                    <li>Nodes, Pods, Services, Replicas</li>
                    <li>Load Balancing mit Ingress</li>
                    <li>Helm</li>
                    <li>ArgoCD</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div>
              <ul class="mb-5">
                <li>
                  <span class="text-blue-600 text-2xl">AWS Cloud & IaC</span>
                  <ul class="mt-2">
                    <li>EC2, S3, EKS</li>
                    <li>Security Groups & NACL</li>
                    <li>CIDR</li>
                    <li>NAT-Gateways</li>
                    <li>Terraform für automatisierte und nachvollziehbare Infras, provider, GitOps</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section v-show="activeTab === 'backend'" class="min-h-[50vh]">
          <div class="grid lg:grid-cols-3 grid-cols-1 mt-8 gap-x-5">
            <div>
              <ul class="mb-5">
                <li>
                  <span class="text-purple-700 text-2xl">PHP</span>
                  <ul class="mt-2">
                    <li>PHP 8.*</li>
                    <li>Laravel Framework</li>
                    <li>Services, Middleware</li>
                    <li>Datenbank Migrationen</li>
                    <li>Unit Testing, PEST (automatisiert mit CI/CD)</li>
                    <li>PHPStan für statische Analyse</li>
                    <li>Design Patterns (Strategy, Observer, Factory, Repository...)</li>
                    <li>SOLID, DRY, YAGNI, KISS</li>
                    <li>API Entwicklung</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div>
              <ul class="mb-5">
                <li>
                  <span class="text-purple-700 text-2xl">Datenbank</span>
                  <ul class="mt-2">
                    <li>MySQL, MariaDB, PostgreSQL</li>
                    <li>SQL als Sprache</li>
                    <li>Backup, Restore</li>
                    <li>Datenbankmodelierung</li>
                    <li>Relationen, PK, FK</li>
                  </ul>
                </li>
              </ul>
              <ul class="mb-5">
                <li>
                  <span class="text-purple-700 text-2xl">Go</span>
                  <ul class="mt-2">
                    <li>Basics</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section v-show="activeTab === 'frontend'" class="min-h-[50vh]">
          <div class="grid lg:grid-cols-4 grid-cols-1 mt-8">
            <div>
              <ul class="mb-5">
                <li>
                  <span class="text-orange-600 text-2xl">Markup & Styling</span>
                  <ul class="mt-2">
                    <li>HTML 5</li>
                    <li>CSS 3</li>
                    <li>SCSS</li>
                    <li>Bootstrap 5</li>
                    <li>Tailwind 4</li>
                    <li>Blade engine</li>
                    <li>Responsive</li>
                  </ul>
                </li>
              </ul>

            </div>
            <div>
              <ul class="mb-5">
                <li>
                  <span class="text-orange-600 text-2xl">Client-Seitige Entwicklung</span>
                  <ul class="mt-2">
                    <li>VueJS, NuxtJS (basics)</li>
                    <li>npm, yarn</li>
                    <li>Vanilla JS, jQuery</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 'devops',
    }
  },
}
</script>

<style lang="scss" scoped>
  button {
    font-family: 'Rajdhani', sans-serif;
  }

</style>