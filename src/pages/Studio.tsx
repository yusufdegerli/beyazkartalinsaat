import { Studio } from 'sanity'
import config from '../sanity/sanity.config'

export default function AdminPage() {
  return (
    <div className="h-screen w-full">
      <Studio config={config} />
    </div>
  )
}
