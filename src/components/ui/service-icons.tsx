import {
  BarChart3,
  Briefcase,
  Code,
  Cpu,
  Edit3,
  Search,
  ShoppingCart,
  TrendingUp,
  Users,
  type LucideIcon,
} from 'lucide-react'
import type { ServiceIconKey } from '@/lib/site-content'

export const serviceIconMap: Record<ServiceIconKey, LucideIcon> = {
  search: Search,
  'trending-up': TrendingUp,
  users: Users,
  'bar-chart-3': BarChart3,
  'edit-3': Edit3,
  code: Code,
  'shopping-cart': ShoppingCart,
  briefcase: Briefcase,
  cpu: Cpu,
}
