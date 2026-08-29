import { Component, type ErrorInfo, type ReactNode } from 'react';
import { ShieldAlert, RefreshCw, Home } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallbackMessage?: string;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('UNIVERSEFACT_ERROR_BOUNDARY_CAUGHT:', error, errorInfo);
  }

  public handleReload = () => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[400px] w-full p-6 sm:p-12 rounded-3xl bg-slate-900 border border-rose-500/40 text-white space-y-6 flex flex-col items-center justify-center text-center font-mono my-8 shadow-2xl">
          <div className="w-16 h-16 rounded-full bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-400">
            <ShieldAlert className="w-8 h-8" />
          </div>

          <div className="space-y-2 max-w-lg">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-rose-500/20 text-rose-300 border border-rose-500/30">
              SYSTEM ISOLATION BOUNDARY COMPONENT SAFEGUARD
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
              COSMIC VISUALIZATION ENCOUNTERED AN EXCEPTION
            </h2>
            <p className="text-xs text-slate-300 font-sans leading-relaxed">
              {this.props.fallbackMessage || 'A component runtime exception occurred. The rest of the platform remains safe and functional.'}
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <button
              onClick={this.handleReload}
              className="px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs flex items-center gap-2 cursor-pointer transition-all shadow-md"
            >
              <RefreshCw className="w-4 h-4" />
              <span>RELOAD VISUALIZATION</span>
            </button>
            <a
              href="/"
              className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-white/10 font-bold text-xs flex items-center gap-2 transition-all"
            >
              <Home className="w-4 h-4" />
              <span>RETURN HOME</span>
            </a>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
