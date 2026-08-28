import React from 'react';
import {
  ShoppingBag,
  Utensils,
  Smartphone,
  Car,
  CreditCard,
  Tv,
  Activity,
  Compass,
  Laptop,
  Truck,
  GraduationCap,
  Heart,
  Sparkles,
  Shirt,
  PiggyBank,
  Home,
  BookOpen,
  Gamepad2,
  Coffee,
  Leaf,
  Building,
  Wallet,
  Music,
  Briefcase,
  GlassWater,
  Tv2,
  Wrench,
  Moon,
  Cpu,
  Target,
  FileQuestion,
} from 'lucide-react';

interface SurveyIconProps {
  name: string;
  className?: string;
}

export const SurveyIcon: React.FC<SurveyIconProps> = ({ name, className = 'w-5 h-5' }) => {
  switch (name) {
    case 'ShoppingBag':
      return <ShoppingBag className={className} />;
    case 'Utensils':
      return <Utensils className={className} />;
    case 'Smartphone':
      return <Smartphone className={className} />;
    case 'Car':
      return <Car className={className} />;
    case 'CreditCard':
      return <CreditCard className={className} />;
    case 'Tv':
      return <Tv className={className} />;
    case 'Activity':
      return <Activity className={className} />;
    case 'Compass':
      return <Compass className={className} />;
    case 'Laptop':
      return <Laptop className={className} />;
    case 'Truck':
      return <Truck className={className} />;
    case 'GraduationCap':
      return <GraduationCap className={className} />;
    case 'Heart':
      return <Heart className={className} />;
    case 'Sparkles':
      return <Sparkles className={className} />;
    case 'Shirt':
      return <Shirt className={className} />;
    case 'PiggyBank':
      return <PiggyBank className={className} />;
    case 'Home':
      return <Home className={className} />;
    case 'BookOpen':
      return <BookOpen className={className} />;
    case 'Gamepad2':
      return <Gamepad2 className={className} />;
    case 'Coffee':
      return <Coffee className={className} />;
    case 'Leaf':
      return <Leaf className={className} />;
    case 'Building':
      return <Building className={className} />;
    case 'Wallet':
      return <Wallet className={className} />;
    case 'Music':
      return <Music className={className} />;
    case 'Briefcase':
      return <Briefcase className={className} />;
    case 'GlassWater':
      return <GlassWater className={className} />;
    case 'Tv2':
      return <Tv2 className={className} />;
    case 'Wrench':
      return <Wrench className={className} />;
    case 'Moon':
      return <Moon className={className} />;
    case 'Cpu':
      return <Cpu className={className} />;
    case 'Target':
      return <Target className={className} />;
    default:
      return <FileQuestion className={className} />;
  }
};
