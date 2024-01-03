module.exports = {
  types: [
    { types: ['feat', 'feature'], label: '🎉 New Features' },
    { types: ['fix', 'bugfix'], label: '🐛 Bugfixes' },
    { types: ['improvements', 'enhancement'], label: '🔨 Improvements' },
    { types: ['perf'], label: '🏎️ Performance Improvements' },
    { types: ['build', 'ci'], label: '🏗️ Build System' },
    { types: ['refactor'], label: '🪚 Refactors' },
    { types: ['doc', 'docs'], label: '📚 Documentation Changes' },
    { types: ['test', 'tests'], label: '🔍 Tests' },
    { types: ['style'], label: '💅 Code Style Changes' },
    { types: ['chore'], label: '🧹 Chores' },
    { types: ['oops', 'attempt'], label: '🙊 Opps - Correcting Mistakes' },
    { types: ['other'], label: 'Other Changes' },
  ],

  excludeTypes: ['other', 'oops', 'attempt'],

  renderTypeSection: function (label, commits) {
    let text = `\n*${label}*\n`;

    commits.forEach((commit) => {
      const scope = commit.scope ? `_${commit.scope}_: ` : '';
      text += `• ${scope}${commit.subject}\n`;
    });

    return text;
  },

  renderNotes: function (notes) {
    let text = `\n*BREAKING CHANGES*\n`;

    notes.forEach((note) => {
      text += `• due to [${note.commit.sha.substr(0, 6)}](${note.commit.url}): ${note.commit.subject}\n\n`;
      text += `${note.text}\n\n`;
    });

    return text;
  },
};
