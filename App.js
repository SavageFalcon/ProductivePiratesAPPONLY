import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Calendar, DotMarking } from 'react-native-calendars'; // Import the Calendar and DotMarking components



const Tab = createBottomTabNavigator();

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [goldCount, setGoldCount] = useState(0);
  const [sliderIndex, setSliderIndex] = useState(0);
  const [taskInput, setTaskInput] = useState('');
  const [selectedDate, setSelectedDate] = useState(null); // Track the selected date


  const addTask = (task) => {
    if (task) {
      const pirateWords = {
        hello: 'ahoy',
      task: 'duty',
      completed: 'plundered',
      buy: 'booty',
      eat: 'feast',
      drink: 'swig',
      sleep: 'slumber',
      work: 'sail',
      study: 'learn the ways of the sea',
      exercise: 'train like a pirate',
      happy: 'jolly',
      sad: 'gloomy',
      great: 'mighty',
      friend: 'matey',
      enemy: 'scallywag',
      money: 'doubloons',
      success: 'victory',
      fail: 'walk the plank',
      create: 'forge',
      destroy: 'scuttle',
      explore: 'roam',
      discover: 'uncover',
      challenge: 'duel',
      win: 'triumph',
      lose: 'sink',
      start: 'set sail',
      stop: 'drop anchor',
      add: 'hoist',
      remove: 'abandon',
      complete: 'plunder',
      prioritize: 'chart a course for',
      organize: 'stow',
      schedule: 'set sail for',
      prepare: 'brace',
      clean: 'swab',
      fix: 'mend',
      improve: 'enhance',
      learn: 'study the maps',
      remember: 'recollect',
      forget: 'befog',
      motivate: 'spur on',
      inspire: 'arouse',
      encourage: 'embolden',
      accomplish: 'achieve',
      believe: 'trust',
      doubt: 'mistrust',
      connect: 'splice',
      disconnect: 'sever',
      unite: 'join forces',
      divide: 'separate',
      share: 'divvy',
      teach: 'enlighten',
      learn: 'soak up the knowledge',
      give: 'bestow',
      receive: 'bequeath',
      help: 'lend a hand',
      hinder: 'sabotage',
      plan: 'plot',
      imagine: 'dream',
      create: 'forge',
      destroy: 'shiver me timbers',
      build: 'construct',
      solve: 'crack the code',
      investigate: 'search for buried treasure',
      communicate: 'parley',
      guide: 'navigate',
      search: 'hunt for',
      find: 'discover',
      lose: 'walk the plank',
      win: 'emerge victorious',
      lose: 'meet Davy Jones',
      // Add more word substitutions as needed
      today: 'this very day',
      tomorrow: 'morrow',
      yesterday: 'yestereve',
      week: 'seven nights',
      month: 'moon',
      year: 'turn of the tide',
      hour: 'bell',
      minute: 'sand',
      second: 'heartbeats',
      now: 'this instant',
      soon: 'afore long',
      later: 'belay',
      morning: 'morn',
      afternoon: 'forenoon',
      evening: 'even',
      night: 'eve',
      breakfast: 'grub',
      lunch: 'nourishment',
      dinner: 'sustenance',
      snack: 'nibble',
      dessert: 'treat',
      exercise: 'heave-ho',
      jog: 'trot',
      run: 'sprint',
      walk: 'amble',
      bike: 'sail',
      swim: 'plunge',
      dance: 'jig',
      sing: 'chantey',
      read: 'peruse',
      write: 'scribble',
      draw: 'sketch',
      paint: 'swab',
      play: 'gamble',
      watch: 'spy',
      listen: 'heed',
      speak: 'talk',
      laugh: 'chuckle',
      cry: 'bawl',
      smile: 'grin',
      frown: 'scowl',
      happy: 'mirthful',
      sad: 'grief-stricken',
      angry: 'irate',
      tired: 'wearied',
      excited: 'astir',
      bored: 'restless',
      scared: 'timorous',
      calm: 'serene',
      quiet: 'hushed',
      noisy: 'boisterous',
      hot: 'sweltering',
      cold: 'freezing',
      wet: 'soaked',
      dry: 'arid',
      big: 'gargantuan',
      small: 'tiny',
      tall: 'towering',
      short: 'diminutive',
      old: 'ancient',
      young: 'youthful',
      new: 'fresh',
      good: 'worthy',
      bad: 'wretched',
      beautiful: 'comely',
      ugly: 'hideous',
      delicious: 'delectable',
      disgusting: 'repugnant',
      interesting: 'captivating',
      boring: 'dreary',
      challenging: 'arduous',
      easy: 'simple',
      fun: 'merry',
      boring: 'dull',
      busy: 'swamped',
      free: 'at liberty',
      important: 'crucial',
      urgent: 'pressing',
      optional: 'voluntary',
      necessary: 'required',
      complete: 'finished',
      incomplete: 'unfinished',
      high: 'aloft',
      low: 'nether',
      early: 'afore',
      late: 'belated',
      missing: 'missing',
      found: 'discovered',
      lost: 'vanished',
      organized: 'shipshape',
      messy: 'disheveled',
      tidy: 'neat',
      clean: 'spotless',
      dirty: 'filthy',
      fixed: 'repaired',
      broken: 'shattered',
      improved: 'enhanced',
      worse: 'dire',
      learned: 'erudite',
      ignorant: 'unlearned',
      motivated: 'fired up',
      unmotivated: 'apathetic',
      encouraged: 'uplifted',
      discouraged: 'disheartened',
      successful: 'victorious',
      unsuccessful: 'defeated',
      supported: 'bolstered',
      hindered: 'hampered',
      planned: 'premeditated',
      spontaneous: 'impulsive',
      imagined: 'envisioned',
      real: 'actual',
      fake: 'counterfeit',
      big: 'grand',
      small: 'petty',
      strong: 'mighty',
      weak: 'feeble',
      fast: 'swift',
      slow: 'lackadaisical',
      long: 'lengthy',
      short: 'brief',
      beautiful: 'alluring',
      ugly: 'monstrous',
      rich: 'wealthy',
      poor: 'destitute',
      happy: 'content',
      sad: 'melancholy',
      good: 'commendable',
      bad: 'abhorrent',
      brave: 'courageous',
      cowardly: 'pusillanimous',
      kind: 'benevolent',
      cruel: 'ruthless',
      wise: 'sage',
      foolish: 'imbecilic',
      honest: 'honorable',
      dishonest: 'deceitful',
      true: 'veracious',
      false: 'fallacious',
      polite: 'courteous',
      rude: 'impolite',
      generous: 'bountiful',
      selfish: 'egocentric',
      friendly: 'amiable',
      hostile: 'belligerent',
      safe: 'secure',
      dangerous: 'perilous',
      interesting: 'intriguing',
      boring: 'tedious',
      delicious: 'scrumptious',
      disgusting: 'repulsive',
      organized: 'orderly',
      messy: 'disordered',
      tidy: 'neat',
      chaotic: 'disorganized',
      helpful: 'beneficial',
      unhelpful: 'detrimental',
      beautiful: 'stunning',
      ugly: 'hideous',
      qualified: 'capable',
      unqualified: 'incompetent',
      successful: 'accomplished',
      unsuccessful: 'unaccomplished',
      talented: 'gifted',
      untalented: 'ungifted',
      happy: 'blissful',
      sad: 'woeful',
      excited: 'thrilled',
      bored: 'uninterested',
      scared: 'frightened',
      calm: 'serene',
      anxious: 'apprehensive',
      tired: 'exhausted',
      energetic: 'vigorous',
      full: 'brimming',
      empty: 'desolate',
      light: 'luminous',
      dark: 'shadowy',
      noisy: 'boisterous',
      quiet: 'hushed',
      hot: 'sweltering',
      cold: 'frigid',
      wet: 'drenched',
      dry: 'parched',
      hungry: 'ravenous',
      thirsty: 'parched',
      happy: 'joyful',
      sad: 'miserable',
      angry: 'irate',
      peaceful: 'serene',
      love: 'adore',
      hate: 'abhor',
      like: 'fancy',
      dislike: 'despise',
      enjoy: 'revel in',
      fear: 'dread',
      need: 'require',
      want: 'crave',
      have: 'possess',
      give: 'bestow',
      take: 'acquire',
      find: 'discover',
      lose: 'misplace',
      create: 'craft',
      destroy: 'demolish',
      build: 'erect',
      break: 'shatter',
      fix: 'mend',
      improve: 'enhance',
      learn: 'acquire knowledge',
      forget: 'erase from memory',
      remember: 'recollect',
      start: 'commence',
      stop: 'halt',
      finish: 'complete',
      win: 'triumph',
      lose: 'be defeated',
      succeed: 'prosper',
      fail: 'flounder',
      begin: 'embark',
      end: 'conclude',
      arrive: 'dock',
      leave: 'depart',
      come: 'approach',
      go: 'set sail',
      enter: 'board',
      exit: 'disembark',
      talk: 'speak',
      listen: 'hear',
      see: 'behold',
      look: 'gaze',
      touch: 'feel',
      smell: 'whiff',
      taste: 'savor',
      read: 'peruse',
      write: 'scribble',
      sing: 'croon',
      dance: 'revel',
      play: 'gamble',
      work: 'toil',
      rest: 'repose',
      sleep: 'slumber',
      wake: 'arouse',
      dream: 'imagine',
      think: 'ponder',
      know: 'comprehend',
      understand: 'grasp',
      believe: 'trust',
      doubt: 'skeptical',
      question: 'inquire',
      wonder: 'marvel',
      search: 'hunt',
      find: 'discover',
      lose: 'misplace',
      help: 'aid',
      hinder: 'obstruct',
      support: 'bolster',
      oppose: 'defy',
      create: 'forge',
      destroy: 'ruin',
      like: 'fancy',
      dislike: 'loathe',
      love: 'adore',
      hate: 'despise',
      enjoy: 'relish',
      fear: 'dread',
      need: 'require',
      want: 'desire',
      have: 'possess',
      give: 'bestow',
      take: 'acquire',
      miss: 'long for',
      plan: 'arrange',
      prepare: 'ready',
      forget: 'discard',
      remember: 'retain',
      motivate: 'inspire',
      discourage: 'dissuade',
      encourage: 'spur on',
      accomplish: 'achieve',
      fail: 'falter',
      win: 'triumph',
      lose: 'suffer defeat',
      solve: 'unravel',
      struggle: 'grapple',
      learn: 'acquire knowledge',
      teach: 'enlighten',
      forget: 'erase from memory',
      remember: 'recollect',
      start: 'commence',
      stop: 'halt',
      finish: 'complete',
      begin: 'embark',
      end: 'conclude',
      arrive: 'dock',
      leave: 'depart',
      come: 'approach',
      go: 'set sail',
      enter: 'board',
      exit: 'disembark',
      talk: 'speak',
      listen: 'hear',
      see: 'behold',
      look: 'gaze',
      touch: 'feel',
      smell: 'whiff',
      taste: 'savor',
      read: 'peruse',
      write: 'scribble',
      sing: 'croon',
      dance: 'revel',
      play: 'gamble',
      work: 'toil',
      rest: 'repose',
      sleep: 'slumber',
      wake: 'arouse',
      dream: 'imagine',
      think: 'ponder',
      know: 'comprehend',
      understand: 'grasp',
      believe: 'trust',
      doubt: 'skeptical',
      question: 'inquire',
      wonder: 'marvel',
      search: 'hunt',
      find: 'discover',
      lose: 'misplace',
      help: 'aid',
      hinder: 'obstruct',
      support: 'bolster',
      oppose: 'defy',
      create: 'forge',
      destroy: 'ruin',
      like: 'fancy',
      dislike: 'loathe',
      love: 'adore',
      hate: 'despise',
      enjoy: 'relish',
      fear: 'dread',
      need: 'require',
      want: 'desire',
      have: 'possess',
      give: 'bestow',
      take: 'acquire',
      miss: 'long for',
      plan: 'arrange',
      prepare: 'ready',
      forget: 'discard',
      remember: 'retain',
      motivate: 'inspire',
      discourage: 'dissuade',
      encourage: 'spur on',
      accomplish: 'achieve',
      fail: 'falter',
      win: 'triumph',
      lose: 'suffer defeat',
      solve: 'unravel',
      struggle: 'grapple',
      learn: 'acquire knowledge',
      teach: 'enlighten',
      forget: 'erase from memory',
      remember: 'recollect',
      start: 'commence',
      stop: 'halt',
      finish: 'complete',
      begin: 'embark',
      end: 'conclude',
      arrive: 'dock',
      leave: 'depart',
      come: 'approach',
      go: 'set sail',
      enter: 'board',
      exit: 'disembark',
      talk: 'speak',
      listen: 'hear',
      see: 'behold',
      look: 'gaze',
      touch: 'feel',
      smell: 'whiff',
      taste: 'savor',
      read: 'peruse',
      write: 'scribble',
      sing: 'croon',
      dance: 'revel',
      play: 'gamble',
      work: 'toil',
      rest: 'repose',
      sleep: 'slumber',
      wake: 'arouse',
      dream: 'imagine',
      think: 'ponder',
      know: 'comprehend',
      understand: 'grasp',
      believe: 'trust',
      doubt: 'skeptical',
      question: 'inquire',
      wonder: 'marvel',
      search: 'hunt',
      find: 'discover',
      lose: 'misplace',
      help: 'aid',
      hinder: 'obstruct',
      support: 'bolster',
      oppose: 'defy',
      create: 'forge',
      destroy: 'ruin',
      like: 'fancy',
      dislike: 'loathe',
      love: 'adore',
      hate: 'despise',
      enjoy: 'relish',
      fear: 'dread',
      need: 'require',
      want: 'desire',
      have: 'possess',
      give: 'bestow',
      take: 'acquire',
      miss: 'long for',
      plan: 'arrange',
      prepare: 'ready',
      forget: 'discard',
      remember: 'retain',
      motivate: 'inspire',
      discourage: 'dissuade',
      encourage: 'spur on',
      accomplish: 'achieve',
      fail: 'falter',
      win: 'triumph',
      lose: 'suffer defeat',
      solve: 'unravel',
      struggle: 'grapple',
      learn: 'acquire knowledge',
      teach: 'enlighten',
      forget: 'erase from memory',
      remember: 'recollect',
      start: 'commence',
      stop: 'halt',
      finish: 'complete',
      begin: 'embark',
      end: 'conclude',
      arrive: 'dock',
      leave: 'depart',
      come: 'approach',
      go: 'set sail',
      enter: 'board',
      exit: 'disembark',
      talk: 'speak',
      listen: 'hear',
      see: 'behold',
      look: 'gaze',
      touch: 'feel',
      smell: 'whiff',
      taste: 'savor',
      read: 'peruse',
      write: 'scribble',
      sing: 'croon',
      dance: 'revel',
      play: 'gamble',
      work: 'toil',
      rest: 'repose',
      sleep: 'slumber',
      wake: 'arouse',
      dream: 'imagine',
      think: 'ponder',
      know: 'comprehend',
      understand: 'grasp',
      believe: 'trust',
      doubt: 'skeptical',
      question: 'inquire',
      wonder: 'marvel',
      search: 'hunt',
      find: 'discover',
      lose: 'misplace',
      help: 'aid',
      hinder: 'obstruct',
      support: 'bolster',
      oppose: 'defy',
      create: 'forge',
      destroy: 'ruin',
      like: 'fancy',
      dislike: 'loathe',
      love: 'adore',
      hate: 'despise',
      enjoy: 'relish',
      fear: 'dread',
      need: 'require',
      want: 'desire',
      have: 'possess',
      give: 'bestow',
      take: 'acquire',
      miss: 'long for',
      plan: 'arrange',
      prepare: 'ready',
      forget: 'discard',
      remember: 'retain',
      motivate: 'inspire',
      discourage: 'dissuade',
      encourage: 'spur on',
      accomplish: 'achieve',
      fail: 'falter',
      win: 'triumph',
      lose: 'suffer defeat',
      solve: 'unravel',
      struggle: 'grapple',
      learn: 'acquire knowledge',
      teach: 'enlighten',
      forget: 'erase from memory',
      remember: 'recollect',
      start: 'commence',
      stop: 'halt',
      finish: 'complete',
      begin: 'embark',
      end: 'conclude',
      arrive: 'dock',
      leave: 'depart',
      come: 'approach',
      go: 'set sail',
      enter: 'board',
      exit: 'disembark',
      talk: 'speak',
      listen: 'hear',
      see: 'behold',
      look: 'gaze',
      touch: 'feel',
      smell: 'whiff',
      taste: 'savor',
      read: 'peruse',
      write: 'scribble',
      sing: 'croon',
      dance: 'revel',
      play: 'gamble',
      work: 'toil',
      rest: 'repose',
      sleep: 'slumber',
      wake: 'arouse',
      dream: 'imagine',
      think: 'ponder',
      know: 'comprehend',
      understand: 'grasp',
      believe: 'trust',
      doubt: 'skeptical',
      question: 'inquire',
      wonder: 'marvel',
      search: 'hunt',
      find: 'discover',
      lose: 'misplace',
      help: 'aid',
      hinder: 'obstruct',
      support: 'bolster',
      oppose: 'defy',
      create: 'forge',
      destroy: 'ruin',
      like: 'fancy',
      dislike: 'loathe',
      love: 'adore',
      hate: 'despise',
      enjoy: 'relish',
      fear: 'dread',
      need: 'require',
      want: 'desire',
      have: 'possess',
      give: 'bestow',
      take: 'acquire',
      miss: 'long for',
      plan: 'arrange',
      prepare: 'ready',
      forget: 'discard',
      remember: 'retain',
      motivate: 'inspire',
      unmotivated: 'indifferent',
      encouraged: 'empowered',
      discouraged: 'disheartened',
      accomplished: 'achieved',
      unsuccessful: 'unsuccessful',
      successful: 'accomplished',
      satisfied: 'content',
      dissatisfied: 'displeased',
      amazed: 'astonished',
      unsurprised: 'expecting',
      impressed: 'awed',
      unimpressed: 'uninspired',
      confident: 'assured',
      unsure: 'hesitant',
      brave: 'courageous',
      cowardly: 'timid',
      excited: 'thrilled',
      bored: 'uninterested',
      peaceful: 'serene',
      chaotic: 'disordered',
      organized: 'orderly',
      messy: 'disorganized',
      beautiful: 'gorgeous',
      ugly: 'hideous',
      pleasant: 'agreeable',
      unpleasant: 'disagreeable',
      friendly: 'amiable',
      unfriendly: 'hostile',
      polite: 'courteous',
      rude: 'impolite',
      generous: 'benevolent',
      selfish: 'self-centered',
      loyal: 'faithful',
      disloyal: 'traitorous',
      humble: 'modest',
      arrogant: 'haughty',
      wise: 'sage',
      foolish: 'imbecilic',
      honest: 'honorable',
      dishonest: 'deceitful',
      true: 'veracious',
      false: 'fallacious',
      intelligent: 'clever',
      unintelligent: 'dim-witted',
      curious: 'inquisitive',
      apathetic: 'indifferent',
      strong: 'powerful',
      weak: 'feeble',
      patient: 'tolerant',
      impatient: 'restless',
      careful: 'cautious',
      careless: 'reckless',
      hopeful: 'optimistic',
      hopeless: 'despairing',
      active: 'energetic',
      inactive: 'idle',
      flexible: 'adaptable',
      inflexible: 'rigid',
      kind: 'compassionate',
      cruel: 'sadistic',
      humble: 'modest',
      proud: 'arrogant',
      };
  
      const pirateTask = task
        .split(' ')
        .map((word) => pirateWords[word.toLowerCase()] || word)
        .join(' ');
  
      const newTask = {
        id: Date.now().toString(),
        task: pirateTask,
        completed: false,
        date: selectedDate,
      };
  
      setTasks((prevTasks) => [...prevTasks, newTask]);
    }
  };
  const filteredTasks = tasks.filter((task) => task.date === selectedDate);

  const generateMarkedDates = () => {
    const markedDates = {};
    tasks.forEach((task) => {
      const date = task.date;
      if (!markedDates[date]) {
        markedDates[date] = {
          dots: [],
        };
      }
      markedDates[date].dots.push({ key: task.id, color: 'green' });
    });
    return markedDates;
  };

  const completeTask = (taskId) => {
    const completedTask = tasks.find((task) => task.id === taskId);
    completedTask.completed = !completedTask.completed; // Toggle the completed property
    const updatedTasks = tasks.filter((task) => task.id !== taskId);

    if (completedTask.completed) {
      setCompletedTasks((prevCompletedTasks) => [...prevCompletedTasks, completedTask]);
      setTasks(updatedTasks);
    } else {
      setCompletedTasks((prevCompletedTasks) =>
        prevCompletedTasks.filter((task) => task.id !== taskId)
      );
      setTasks((prevTasks) => [...prevTasks, completedTask]);
    }
  };

  const restoreTask = (taskId) => {
    const restoredTask = completedTasks.find((task) => task.id === taskId);
    restoredTask.completed = false; // Toggle the completed property
    setCompletedTasks((prevCompletedTasks) =>
      prevCompletedTasks.filter((task) => task.id !== taskId)
    );
    setTasks((prevTasks) => [...prevTasks, restoredTask]);
  };

  const collectTask = (taskId) => {
    setCompletedTasks((prevCompletedTasks) =>
      prevCompletedTasks.filter((task) => task.id !== taskId)
    );
    setGoldCount((prevGoldCount) => prevGoldCount + 200);
  };

  const renderTasks = ({ item }) => (
    <TouchableOpacity onPress={() => completeTask(item.id)}>
      <View style={styles.taskContainer}>
        <View
          style={[
            styles.completeTaskCircle,
            { backgroundColor: item.completed ? 'blue' : 'transparent' },
          ]}
        />
        <Text
          style={[
            styles.taskText,
            item.completed ? styles.completedTaskText : null,
          ]}
        >
          {item.task}
        </Text>
      </View>
    </TouchableOpacity>
  );

  const renderCompletedTasks = ({ item }) => (
    <View style={styles.completedTaskContainer}>
      <TouchableOpacity onPress={() => restoreTask(item.id)}>
        <View style={styles.completedTaskCircle} />
      </TouchableOpacity>
      <Text style={styles.completedTaskText}>{item.task}</Text>
      <TouchableOpacity
        style={styles.collectButton}
        onPress={() => collectTask(item.id)}
        disabled={false}
      >
        <Text style={styles.collectButtonText}>Collect</Text>
      </TouchableOpacity>
    </View>
  );

  const handleTaskInput = (text) => {
    setTaskInput(text);
  };

  const handleTaskSubmit = () => {
    addTask(taskInput);
    setTaskInput('');
  };

  const handleDayPress = (day) => {
    setSelectedDate(day.dateString);
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Calendar') {
              iconName = focused ? 'ios-calendar-sharp' : 'ios-calendar-outline';
            } else if (route.name === 'Home') {
              iconName = focused ? 'ios-home-sharp' : 'ios-home-outline';
            } else if (route.name === 'Game') {
              iconName = focused ? 'ios-game-controller-sharp' : 'ios-game-controller-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Calendar">
          {() => (
            <View style={styles.container}>
              <Calendar
                onDayPress={handleDayPress}
                markedDates={{ ...generateMarkedDates(), [selectedDate]: { selected: true } }}
                markingType={'multi-dot'}
              />
              {selectedDate && (
                <View style={styles.selectedDateTasks}>
                  <Text style={styles.selectedDateText}>{`Tasks for ${selectedDate}`}</Text>
                  <FlatList
                    style={styles.selectedDateTaskList}
                    data={filteredTasks}
                    renderItem={renderTasks}
                    keyExtractor={(item) => item.id}
                  />
                </View>
              )}
            </View>
          )}
        </Tab.Screen>
        <Tab.Screen name="Home">
  {() => (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => console.log('Profile button pressed')}>
          <Ionicons name="ios-person" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.goldMeter}>
          <Ionicons name="ios-star" size={24} color="gold" />
          <Text style={styles.goldCount}>{goldCount}</Text>
        </View>
      </View>
      <View style={styles.content}>
        {sliderIndex === 0 ? (
          <View style={styles.ongoingTasks}>
            <Text style={styles.title}>Ongoing Tasks</Text>
            <FlatList
              style={styles.taskList}
              data={tasks}
              renderItem={renderTasks}
              keyExtractor={(item) => item.id}
            />
          </View>
        ) : (
          <View style={styles.completedTasks}>
            <Text style={styles.title}>Completed Tasks</Text>
            <FlatList
              style={styles.taskList}
              data={completedTasks}
              renderItem={renderCompletedTasks}
              keyExtractor={(item) => item.id}
            />
          </View>
        )}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter task"
            onChangeText={handleTaskInput}
            onSubmitEditing={handleTaskSubmit}
            value={taskInput}
          />
        </View>
      </View>
      <View style={styles.slider}>
        <TouchableOpacity
          style={[
            styles.sliderButton,
            sliderIndex === 0 ? styles.sliderButtonActive : null,
          ]}
          onPress={() => setSliderIndex(0)}
        >
          <Text style={styles.sliderButtonText}>  Ongoing  </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.sliderButton,
            sliderIndex === 1 ? styles.sliderButtonActive : null,
          ]}
          onPress={() => setSliderIndex(1)}
        >
          <Text style={styles.sliderButtonText}>Completed</Text>
        </TouchableOpacity>
      </View>
    </View>
  )}
</Tab.Screen>
        <Tab.Screen name="Game">
          {() => (
            <View style={styles.container}>
              <Text style={styles.screenText}>Game Screen</Text>
            </View>
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  goldMeter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  goldCount: {
    marginLeft: 5,
    fontWeight: 'bold',
    fontSize: 16,
  },
  slider: {
    flexDirection: 'row',
    position: 'absolute',
    top: 8,
    right: 100,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    overflow: 'hidden',
    marginTop: 10,
  },
  inputContainer: {
    marginBottom: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 15,
    backgroundColor: '#f2f2f2',
  },
  sliderButton: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 0,
  },
  sliderButtonActive: {
    backgroundColor: 'blue',
  },
  sliderButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
  },
  ongoingTasks: {
    flex: 1,
    fontSize: 50,
    marginTop:20,
    marginBottom:50,
  },
  completedTasks: {
    flex: 1,
    fontSize: 50,
    marginTop:20,
    marginBottom:50,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gold',
    paddingHorizontal: 10,
    fontSize: 18,
  },
  taskList: {
    flex: 1,
  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    borderRadius: 15,
    backgroundColor: '#f2f2f2',
  },
  completeTaskCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'blue',
    marginRight: 15,
  },
  taskText: {
    flex: 1,
    fontSize: 18,
  },

  completedTaskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    borderRadius: 15,
    backgroundColor: '#f2f2f2',
  },
  completedTaskCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'gray',
    marginRight: 15,
  },
  completedTaskText: {
    textDecorationLine: 'line-through',
    color: 'gray',
    flex: 1,
    fontSize: 18,
  },
  collectButton: {
    backgroundColor: 'green',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginLeft: 'auto',
  },
  collectButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  selectedDateTasks: {
    marginTop: 20,
  },
  selectedDateText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  selectedDateTaskList: {
    marginBottom: 20,
  },
  screenText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  
});