<template>
    <div>
      <h1>Job Listings</h1>
      <button @click="fetchJobs">Check openings</button>
      <div v-if="jobs.length > 0">
        <div v-for="job in jobs" :key="job.id">
          <h2>{{ job.title }}</h2>
          <p>Company: {{ job.company }}</p>
          <p>Location: {{ job.location }}</p>
          <p>Salary: ${{ job.salary }}</p>
          <p>Description: {{ job.description }}</p>
          <p>Posted Date: {{ formatPostedDate(job.postedDate) }}</p>
          <div>
            <button @click="display">Apply</button>
            <h1 v-if="show"><UserDetails /></h1>
          </div>
          <hr>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import UserDetails from './UserDetails.vue';
  
  export default {
    components: { UserDetails },
    name: 'GetJobs',
    data() {
      return {
        jobs: [],
        show: false,
      };
    },
    methods: {
      display() {
        this.show = !this.show;
      },
      async onChange(e) {
        let file = e.target.files[0];
        let formData = new FormData();
        formData.append('pdf', file);
  
        await this.$axios.post(`/materials/upload/${this.material.SKU}`, formData).then((res) => console.log(res.data));
      },
      formatPostedDate(isoDate) {
        const date = new Date(isoDate);
        return date.toISOString().slice(0, 10);
      },
      async fetchJobs() {
        try {
          const response = await this.$axios.get('https://jobsportalbackendfz-production.up.railway.app/api/getjobs');
          this.jobs = response.data.myData;
        } catch (error) {
          console.error('Error fetching jobs:', error);
        }
      },
    },
  };
  </script>
  
  <style>
    #app {
      background-size: cover;
      background-color: rgb(199, 204, 202);
      width: 100%;
      height: 100%;
      margin-left: 1px;
      padding-left: 1px; 
      text-align: left;
    }
  </style>
  