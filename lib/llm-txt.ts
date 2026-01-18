/**
 * Generates LLM.txt content for a page
 * LLM.txt is a standard format for providing context to LLMs about a page
 */

export interface LLMTxtConfig {
  title: string;
  description: string;
  url: string;
  author: string;
  keywords: string[];
  content: string;
  lastModified?: string;
  relatedLinks?: Array<{ title: string; url: string }>;
}

export function generateLLMTxt(config: LLMTxtConfig): string {
  const lines: string[] = [];
  
  lines.push(`# ${config.title}`);
  lines.push('');
  lines.push(`URL: ${config.url}`);
  lines.push(`Author: ${config.author}`);
  if (config.lastModified) {
    lines.push(`Last Modified: ${config.lastModified}`);
  }
  lines.push('');
  lines.push(`## Description`);
  lines.push(config.description);
  lines.push('');
  
  if (config.keywords && config.keywords.length > 0) {
    lines.push(`## Keywords`);
    lines.push(config.keywords.join(', '));
    lines.push('');
  }
  
  lines.push(`## Content`);
  lines.push(config.content);
  lines.push('');
  
  if (config.relatedLinks && config.relatedLinks.length > 0) {
    lines.push(`## Related Links`);
    config.relatedLinks.forEach(link => {
      lines.push(`- [${link.title}](${link.url})`);
    });
    lines.push('');
  }
  
  return lines.join('\n');
}

