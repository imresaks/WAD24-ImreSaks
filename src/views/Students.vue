<template>
<div>
<h3> Students grades </h3>


<div class="container">
    <table>
          <thead>
          <tr>
            <th>St. Code</th>
            <th>St. Level</th>
            <th>Homeworks</th>
            <th>Exam</th>
            <th>Final grade</th>
          </tr>
        </thead>
        <tbody>
          <tr class="item" v-for="grade in grades" :key="grade.id">
            <td>{{ grade.studentcode }} </td>
            <td>{{ grade.studentlevel }} </td>
            <td> {{ grade.hws }}</td>
            <td>{{ grade.exam }} </td>
            <!--<td>{{ grade.final }} </td> -->
            <td class='red' v-if="grade.hws < 21" @click="showFeedback(grade.examfeedback)"> {{ grade.final}}</td>
            <td class='red' v-else-if="grade.exam < 21" @click="showFeedback(grade.examfeedback)"> {{ grade.final}}</td>
            <td class='red' v-else-if="grade.final < 51" @click="showFeedback(grade.examfeedback)"> {{ grade.final}}</td>
            <td class='green' v-else @click="showFeedback(grade.examfeedback)">{{ grade.final}}</td>
          </tr>
          </tbody>
    </table>
  </div>
  <div v-if="selectedFeedback" class="feedback-box">
    <b>Exam feedback: </b>
    {{ selectedFeedback }}
    </div>
</div>
</template>

<script>
export default {
  name: "Students",
  data() {
    return {
      grades: [],
      selectedFeedback: null
    };
  },
  methods: {
    fetchRecords() {
      fetch(`http://localhost:3000/api/grades`)
        .then((response) => response.json())
        .then((data) => (this.grades = data))
        .catch((err) => console.log(err.message));
  },
  showFeedback(feedback) {
      this.selectedFeedback = feedback;
    }
  },
  mounted() {
    this.fetchRecords();
    console.log("mounted");
  } 
};
</script>

<style scoped>
th {
  background: rgb(68, 100, 196);
}
td {
  background: rgb(128, 147, 212);
}
th, td {
  font-size: 15px;
  margin-bottom: 5px;
  padding: 8px 10px;
}
.red{
  background: rgb(225, 33, 19); 
}
.green{
  background: rgb(14, 194, 65); 
}
.feedback-box {
  background-color: #c96ece;
  padding: 10px;
  margin-top: 20px;
  border: 1px solid #ccc;
}
.container {
  background: #d5d7d8;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  padding: 10px 20px;
  margin: auto;
  width: 90%;
  display: flex;
  justify-content: center;
}


</style>
