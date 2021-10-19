<template>
    <div>
        <p>Name: {{ person.name }}</p>
        <p>City: {{ person.city }}</p>
        <p>Age: {{ person.age }}</p>
        <p> {{traits[1]}} </p>

        <button @click ="updateCity">Update city</button>
        <button @click="setAge">Set age</button>
    </div>
</template>

<script>
export default {
  name: 'PersonalComponent',
  data() {
    return {
      person: {
        name: 'Peter Griffin',
        city: '',
      },
      traits: ['fair', 'good looking', 'lovable'],
    };
  },
  methods: {
    updateCity() {
      this.person.city = 'Quahog';
      this.$set(this.traits, 1, 'smooth');
    },
    setAge() {
      this.$set(this.person, 'age', 35);
    },
  },
};

</script>
