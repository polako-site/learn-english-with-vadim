import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Cookie, Settings } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    localStorage.setItem("cookie-consent", JSON.stringify(allAccepted));
    setIsVisible(false);
  };

  const handleAcceptNecessary = () => {
    const necessaryOnly: CookiePreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    localStorage.setItem("cookie-consent", JSON.stringify(necessaryOnly));
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem("cookie-consent", JSON.stringify(preferences));
    setShowSettings(false);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background border-t border-border shadow-lg">
        <div className="container mx-auto flex flex-col gap-4">
          <div className="flex items-start gap-3 text-sm text-muted-foreground">
            <Cookie className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
            <p>
              We use cookies to ensure site functionality and improve our services. 
              You can choose which cookies to accept.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Button onClick={handleAcceptAll} size="sm" variant="secondary">
              Accept All
            </Button>
            <Button onClick={handleAcceptNecessary} size="sm" variant="outline">
              Necessary Only
            </Button>
            <Button 
              onClick={() => setShowSettings(true)} 
              size="sm" 
              variant="ghost"
              className="gap-2"
            >
              <Settings className="w-4 h-4" />
              Cookie Settings
            </Button>
          </div>
        </div>
      </div>

      <Dialog open={showSettings} onOpenChange={setShowSettings}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Cookie Preferences</DialogTitle>
            <DialogDescription>
              Manage your cookie preferences. Necessary cookies are required for the website to function properly.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-6 py-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="necessary" className="font-medium">Necessary Cookies</Label>
                <p className="text-xs text-muted-foreground">
                  Required for basic site functionality
                </p>
              </div>
              <Switch
                id="necessary"
                checked={preferences.necessary}
                disabled
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="analytics" className="font-medium">Analytics Cookies</Label>
                <p className="text-xs text-muted-foreground">
                  Help us understand how visitors use our site
                </p>
              </div>
              <Switch
                id="analytics"
                checked={preferences.analytics}
                onCheckedChange={(checked) => 
                  setPreferences(prev => ({ ...prev, analytics: checked }))
                }
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="marketing" className="font-medium">Marketing Cookies</Label>
                <p className="text-xs text-muted-foreground">
                  Used to deliver personalized advertisements
                </p>
              </div>
              <Switch
                id="marketing"
                checked={preferences.marketing}
                onCheckedChange={(checked) => 
                  setPreferences(prev => ({ ...prev, marketing: checked }))
                }
              />
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setShowSettings(false)}>
              Cancel
            </Button>
            <Button onClick={handleSavePreferences}>
              Save Preferences
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CookieConsent;
