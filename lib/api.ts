
// This is the centralized place to handle API calls.
// We use Formspree (https://formspree.io) to handle form submissions without a backend server.

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xkobvlyp";

export const submitWaitlist = async (email: string, company?: string) => {
  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        type: 'WAITLIST',
        email, 
        company: company || 'Not Provided',
        source: window.location.pathname, // Tracks which page they signed up from
        timestamp: new Date().toISOString()
      })
    });

    if (response.ok) {
      return true;
    } else {
      const data = await response.json();
      if (Object.prototype.hasOwnProperty.call(data, 'errors')) {
        throw new Error(data["errors"].map((error: any) => error["message"]).join(", "));
      } else {
        throw new Error('Submission failed');
      }
    }
  } catch (error) {
    console.error("Form submission error:", error);
    throw error;
  }
};

export const submitContact = async (data: { name: string; email: string; message: string }) => {
  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        type: 'CONTACT_FORM',
        ...data,
        source: window.location.pathname,
        timestamp: new Date().toISOString()
      })
    });

    if (response.ok) {
      return true;
    } else {
      const data = await response.json();
      if (Object.prototype.hasOwnProperty.call(data, 'errors')) {
        throw new Error(data["errors"].map((error: any) => error["message"]).join(", "));
      } else {
        throw new Error('Submission failed');
      }
    }
  } catch (error) {
    console.error("Contact form error:", error);
    throw error;
  }
};
