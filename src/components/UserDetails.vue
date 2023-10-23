<template>
    <div>
      <form @submit.prevent="submitForm">
        <h5>Enter your details below</h5>
        <input type ="Usename" placeholder="Enter name">
        <input type ="Experience" placeholder="Enter experience">
        <input type ="Resume Link" placeholder="Enter Resume Link">
        <input type ="Linkedin Profile Link" placeholder="Enter Linkedin Profile Link">
        <div>       
             <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'UserDetails',
    data() {
      return {
        userData: {
          name: '',
          experience: '',
          resumeLink: '',
          linkedinLink: '',
        },
      };
    },
    methods: {
      submitForm() {
        // You can access the form data from this.userData and submit it to your backend or perform any other actions.
        console.log('Form submitted with data:', this.userData);
      },
    },
  };
  </script>
  