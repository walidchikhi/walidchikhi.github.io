/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from "./components/Header";
import Hero from "./components/Hero";
import Expertise from "./components/Expertise";
import Publications from "./components/Publications";
import SoftwareProjects from "./components/SoftwareProjects";
import ScientificStays from "./components/ScientificStays";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-nordic-bg font-sans selection:bg-nordic-sage/30 selection:text-nordic-text">
      <Header />
      <main>
        <Hero />
        <Expertise />
        <Publications />
        <SoftwareProjects />
        <ScientificStays />
      </main>
      <Footer />
    </div>
  );
}
