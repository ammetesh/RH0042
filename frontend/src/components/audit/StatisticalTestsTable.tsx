import Card from "@/components/common/Card";

import { StatisticalTest } from "@/types/audit";

interface Props {
  tests: StatisticalTest[];
}

export default function StatisticalTestsTable({
  tests,
}: Props) {

  return (
    <Card>

      <h3 className="text-xl mb-6">
        Statistical Tests
      </h3>

      <table className="w-full">

        <thead>

          <tr>

            <th>Name</th>

            <th>Statistic</th>

            <th>P Value</th>

            <th>Status</th>

          </tr>

        </thead>

        <tbody>

          {tests.map((test) => (

            <tr key={test.name}>

              <td>{test.name}</td>

              <td>{test.statistic.toFixed(4)}</td>

              <td>{test.p_value.toFixed(4)}</td>

              <td>
                {test.passed ? "PASS" : "FAIL"}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </Card>
  );
}