<template>
  <div class="calendar">
    <div class="date-header">
      <div class="prev-month" @click="prevMonth">《</div>
      <div class="show-date">{{year}}年{{month}}月{{day}}日</div>
      <div class="next-month" @click="nextMonth">》</div>
    </div>
    <div class="date-content">
      <div class="week-header">
        <div class="week-day" v-for="item in weekDay" :key="item">{{item}}</div>
      </div>
      <div class="week-date">
        <div class="every-day" v-for="i in 42" :key="i">
          <div :class="{'today':`${year}-${month}-${i-beginDay}`==today,
              'active':`${year}-${month}-${i-beginDay}`==`${year}-${month}-${day}`}"
            v-if="i - beginDay >0&&i - beginDay<=allDays" @click="selectDay(i-beginDay)">{{i - beginDay}}
          </div>
          <div class="other-day" v-else-if="i - beginDay <=0">{{preMonthDays + i - beginDay}}</div>
          <div class="other-day" v-else>{{i-beginDay - allDays}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'AgCalendar',
    data() {
      return {
        year: '',
        month: '',
        day: '',
        today: '',
        weekDay: ['日', '一', '二', '三', '四', '五', '六']
      }
    },
    mounted() {
      this.initCalender()
    },
    methods: {
      prevMonth() {
        this.year = this.month === 1 ? this.year - 1 : this.year
        this.month = this.month === 1 ? 12 : this.month - 1
        const prevMonthAllDay = new Date(this.year, this.month, 0).getDate()
        if (prevMonthAllDay < this.day) {
          this.day = prevMonthAllDay
        }
      },
      nextMonth() {
        this.year = this.month === 12 ? this.year + 1 : this.year
        this.month = this.month === 12 ? 1 : this.month + 1
        const nextMonthAllDay = new Date(this.year, this.month, 0).getDate()
        if (nextMonthAllDay < this.day) {
          this.day = nextMonthAllDay
        }
      },
      initCalender() {
        const date = new Date()
        this.year = date.getFullYear()
        this.month = date.getMonth() + 1
        this.day = date.getDate()
        this.today = `${this.year}-${this.month}-${this.day}`
      },
      selectDay(i) {
        this.day = i
        this.$emit('selectDay', `${this.year}-${this.month}-${this.day}`)
      }
    },
    computed: {
      beginDay() { // 获取本月第一天是周几
        return new Date(this.year, this.month - 1, 1).getDay()
      },
      allDays() {
        return new Date(this.year, this.month, 0).getDate()
      },
      preMonthDays() {
        return new Date(
          this.month === 0 ? this.year - 1 : this.year,
          this.month === 0 ? 11 : this.month - 1,
          0).getDate()
      }
    }
  }
</script>
<style scoped>
  .calendar {
    padding: 10px;
    text-align: center;
    border: 1px solid rgba(0, 0, 0, .1)
  }

  .date-header {
    display: flex;
    justify-content: space-around;
    cursor: pointer;
  }

  .prev-month,
  .next-month {
    cursor: pointer;
  }

  .week-header .week-day {
    width: 14.28%;
    display: inline-block;
  }

  .every-day {
    width: 14.28%;
    display: inline-block;
    height: 30px;
    line-height: 30px;
    cursor: pointer;
  }

  .other-day {
    color: rgba(0, 0, 0, 0.2);
  }

  .active {
    color: #39aef5;
    background: rgba(57, 147, 245, .3);
  }

  .today {
    color: #fff;
    border: 1px solid #39aef5;
    background: #39aef5;
    border-radius: 3px;
  }
</style>