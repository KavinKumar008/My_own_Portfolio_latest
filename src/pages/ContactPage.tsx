import { useState } from "react";
import { Mail, Phone, Copy, Check, ArrowUpRight } from "lucide-react";
import { personalInfo } from "../data/personal";

const ContactPage = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <div className="py-8 max-w-3xl space-y-12">
      {/* Header */}
      <div>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-zinc-950 dark:text-white mb-4 font-mono">
          CONTACT ME
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg leading-relaxed">
          I'm currently available for full-time software engineering roles and freelance projects. Let's discuss how we can work together.
        </p>
      </div>

      {/* Main Mail CTA Button */}
      <div>
        <a
          href={`mailto:${personalInfo.email}`}
          className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 font-bold text-base hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all shadow-xl active:scale-95"
        >
          <span>Send me an email</span>
          <ArrowUpRight className="w-5 h-5" />
        </a>
      </div>

      {/* Direct Contact Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
        {/* Email */}
        <div className="flex items-center justify-between p-5 rounded-2xl border border-zinc-200/80 dark:border-white/10 bg-white/70 dark:bg-zinc-900/40 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] text-zinc-400 dark:text-zinc-500 font-medium uppercase tracking-wider">
                Email
              </p>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-sm font-semibold text-zinc-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {personalInfo.email}
              </a>
            </div>
          </div>
          <button
            type="button"
            onClick={handleCopyEmail}
            className="p-2 text-zinc-400 hover:text-zinc-950 dark:hover:text-white rounded-lg hover:bg-zinc-100 dark:hover:bg-white/5 transition-colors"
            title="Copy email"
          >
            {copiedEmail ? (
              <Check className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </button>
        </div>

        {/* Phone */}
        <div className="flex items-center justify-between p-5 rounded-2xl border border-zinc-200/80 dark:border-white/10 bg-white/70 dark:bg-zinc-900/40 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] text-zinc-400 dark:text-zinc-500 font-medium uppercase tracking-wider">
                Phone
              </p>
              <a
                href={`tel:${personalInfo.phone}`}
                className="text-sm font-semibold text-zinc-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                {personalInfo.phone}
              </a>
            </div>
          </div>
          <button
            type="button"
            onClick={handleCopyPhone}
            className="p-2 text-zinc-400 hover:text-zinc-950 dark:hover:text-white rounded-lg hover:bg-zinc-100 dark:hover:bg-white/5 transition-colors"
            title="Copy phone"
          >
            {copiedPhone ? (
              <Check className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
