import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts'
import { ChartContainer, ChartTooltip } from '@/components/ui/chart'

const chartConfig = {
  mobile: {
    label: 'Pull Request',
    color: 'hsl(var(--chart-2))',
  },
}

export function OpenSourceChart({ data }) {
  return (
    <ChartContainer
      className="w-full h-[270px] overflow-hidden"
      config={chartConfig}
    >
      <AreaChart accessibilityLayer data={data}>
        <CartesianGrid stroke="#2a2a2a" vertical={false} />
        <XAxis
          interval="preserveStartEnd"
          dataKey="formattedDate"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
        />
        <ChartTooltip
          cursor={false}
          content={({ active, payload }) => {
            if (!active || !payload?.length) return null

            const { pullRequests } = payload[0].payload

            return (
              <div className="p-2 bg-background border border-[#2a2a2a] rounded max-w-[210px] w-full">
                <p>Pull Requests:</p>
                <ul className="text-muted-foreground break-all text-[12px]">
                  {pullRequests.map((pr) => (
                    <li key={pr.url}>{pr.title}</li>
                  ))}
                </ul>
              </div>
            )
          }}
        />
        <defs>
          <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor="var(--color-mobile)"
              stopOpacity={0.8}
            />
            <stop
              offset="95%"
              stopColor="var(--color-mobile)"
              stopOpacity={0.1}
            />
          </linearGradient>
        </defs>
        <Area
          activeDot={true}
          dataKey="value"
          type="natural"
          fill="url(#fillMobile)"
          fillOpacity={0.4}
          stroke="var(--color-mobile)"
          stackId="a"
          dot={{ fillOpacity: 1, fill: '#8F9391' }}
        />
      </AreaChart>
    </ChartContainer>
  )
}
