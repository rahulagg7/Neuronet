import { Button } from "./components/Button"
import { Card } from "./components/Card"
import { PlusIcon } from "./icons/PlusIcon"
import { ShareIcon } from "./icons/ShareIcon"

function App() {
  return (
    <div className="p-4">
        <div className="flex justify-end gap-4">
          <Button variant = "primary" text = "Add Content"  startIcon = {<PlusIcon />}></Button>
          <Button variant = "secondary" text = "Share" startIcon={<ShareIcon />}></Button>
      </div>
      <div className = "flex gap-4">
        <Card type = "youtube" link = "https://www.youtube.com/embed/3c4UyGRBnmM?si=Usaqmz2rQCSL54vn" title="First video"/>
        <Card type = "twitter" link = "https://x.com/elonmusk/status/1519480761749016577" title = "First tweet" ></Card>
      </div>
      </div>
  )
}

export default App
