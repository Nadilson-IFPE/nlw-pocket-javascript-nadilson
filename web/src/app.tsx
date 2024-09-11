import { Dialog } from './components/ui/dialog'
import { CreateGoal } from './components/create-goal'
import { Summary } from './components/summary'

export function App() {
  return (
    <Dialog>
      <Summary />
      <CreateGoal />
    </Dialog>
  )
}