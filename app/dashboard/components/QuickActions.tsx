// app/dashboard/components/QuickActions.tsx
import { 
  PencilSquareIcon,
  DocumentTextIcon,
  CreditCardIcon,
  MapIcon,
  QuestionMarkCircleIcon,
  UserCircleIcon
} from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

export default function QuickActions() {
  const router = useRouter();

  const actions = [
    {
      title: "Update Profile",
      description: "Edit company information",
      icon: PencilSquareIcon,
      color: "bg-[#F3F8FC] text-[#0092D7]",
      onClick: () => router.push('/dashboard/exhibitor')
    },
    {
      title: "View Invoices",
      description: "Check and pay invoices",
      icon: CreditCardIcon,
      color: "bg-emerald-50 text-emerald-600",
      onClick: () => router.push('/dashboard/invoice')
    },
    {
      title: "Stall Layout",
      description: "View your stall location",
      icon: MapIcon,
      color: "bg-[#171A1B]/5 text-[#171A1B]",
      onClick: () => router.push('/dashboard/layout')
    },
    {
      title: "Requirements",
      description: "Submit additional requests",
      icon: DocumentTextIcon,
      color: "bg-[#B80A26]/10 text-[#B80A26]",
      onClick: () => router.push('/dashboard/requirements')
    },
    {
      title: "Manual",
      description: "Event guidelines",
      icon: QuestionMarkCircleIcon,
      color: "bg-slate-100 text-slate-600",
      onClick: () => router.push('/dashboard/manual')
    },
    {
      title: "Support",
      description: "Get help",
      icon: UserCircleIcon,
      color: "bg-[#B80A26]/10 text-[#B80A26]",
      onClick: () => router.push('/dashboard/exhibitor')
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {actions.map((action) => (
        <button
          key={action.title}
          onClick={action.onClick}
          className="flex items-start gap-3 rounded-xl border border-slate-200 p-4 text-left transition-colors hover:border-[#0092D7]/40 hover:bg-[#F3F8FC]"
        >
          <div className={`p-2 rounded-lg ${action.color}`}>
            <action.icon className="h-5 w-5" />
          </div>
          <div>
            <h4 className="font-medium text-sm">{action.title}</h4>
            <p className="text-xs text-gray-500">{action.description}</p>
          </div>
        </button>
      ))}
    </div>
  );
}