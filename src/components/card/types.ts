export type Goal = "loseWeight" | "buildMuscle" | "maintainWeight";
export interface GoalCardProps {
  goal: Goal;
  selectedGoal: Goal | null;
  onClick: (goal: Goal) => void;
  iconMd: React.ReactNode;
  iconSm: React.ReactNode;
  label: string;
}

export interface ServiceCardProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string;
  title: string;
  imgSrc: string;
  products?: any[];
}

export interface StepCardProps
  extends React.HtmlHTMLAttributes<HTMLDivElement> {
  stepNumber: string;
  description: string;
}

export interface SatisfactionCardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  description: string;
  title: string;
  imgSrc: string;
}

export interface BlogCardProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string;
  title: string;
  description: string;
  date: Date;
  imgSrc: string;
  writtenBy: string;
  tag: string[];
}

export interface ProductProps {
  id: string;
  title: string;
  price: number;
  details: string[];
  imgSrc: string;
}
