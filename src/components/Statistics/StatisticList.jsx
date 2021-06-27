import Statistics from './Statistics'

const StatisticList = ({ stats, title }) => (
  <section>
    <h2 class="title">{title}</h2>

    <ul>
      {stats.map((stat) => (
        <li key={stat.id}>
          <Statistics label={stat.label} percentage={stat.percentage} />
        </li>
      ))}
    </ul>
  </section>
)

export default StatisticList
